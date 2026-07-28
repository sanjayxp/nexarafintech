"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  createArticle,
  deleteArticle,
  getArticle,
  slugify,
  updateArticle,
  uploadArticleImage,
} from "@/lib/articles";

async function uploadIfPresent(formData: FormData): Promise<string | null> {
  const file = formData.get("cover");
  if (file instanceof File && file.size > 0) {
    return uploadArticleImage(file);
  }
  return null;
}

function readFields(formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const slugInput = String(formData.get("slug") ?? "").trim();
  const tag = String(formData.get("tag") ?? "").trim() || "Insights";
  const excerpt = String(formData.get("excerpt") ?? "").trim();
  const content = String(formData.get("content") ?? "").trim();
  const status = formData.get("status") === "published" ? "published" : "draft";
  const slug = slugify(slugInput || title);
  return { title, slug, tag, excerpt, content, status } as const;
}

export async function createArticleAction(formData: FormData) {
  const { title, slug, tag, excerpt, content, status } = readFields(formData);

  if (!title || !slug || !excerpt || !content) {
    redirect(
      `/admin/insights/new?error=${encodeURIComponent("Title, slug, excerpt, and content are all required")}`
    );
  }

  const cover_image_url = await uploadIfPresent(formData);

  try {
    await createArticle({
      title,
      slug,
      tag,
      excerpt,
      content,
      cover_image_url,
      status,
      published_at: status === "published" ? new Date().toISOString() : null,
    });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Could not save article";
    redirect(`/admin/insights/new?error=${encodeURIComponent(message)}`);
  }

  revalidatePath("/admin/insights");
  revalidatePath("/insights");
  revalidatePath("/");
  redirect("/admin/insights");
}

export async function updateArticleAction(id: string, formData: FormData) {
  const { title, slug, tag, excerpt, content, status } = readFields(formData);

  if (!title || !slug || !excerpt || !content) {
    redirect(
      `/admin/insights/${id}/edit?error=${encodeURIComponent("Title, slug, excerpt, and content are all required")}`
    );
  }

  const cover_image_url = await uploadIfPresent(formData);
  const existing = await getArticle(id);
  const shouldStampPublished =
    status === "published" && existing?.status !== "published";

  try {
    await updateArticle(id, {
      title,
      slug,
      tag,
      excerpt,
      content,
      status,
      ...(cover_image_url ? { cover_image_url } : {}),
      ...(shouldStampPublished ? { published_at: new Date().toISOString() } : {}),
    });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Could not save article";
    redirect(`/admin/insights/${id}/edit?error=${encodeURIComponent(message)}`);
  }

  revalidatePath("/admin/insights");
  revalidatePath("/insights");
  revalidatePath("/");
  redirect("/admin/insights");
}

export async function deleteArticleAction(id: string) {
  await deleteArticle(id);
  revalidatePath("/admin/insights");
  revalidatePath("/insights");
  revalidatePath("/");
}
