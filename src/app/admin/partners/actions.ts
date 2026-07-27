"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  createPartner,
  deletePartner,
  getPartners,
  updatePartner,
  uploadPartnerImage,
} from "@/lib/partners";

function normalizeUrl(url: string) {
  if (!url) return url;
  return /^https?:\/\//i.test(url) ? url : `https://${url}`;
}

async function uploadIfPresent(
  formData: FormData,
  field: "logo" | "picture"
): Promise<string | null> {
  const file = formData.get(field);
  if (file instanceof File && file.size > 0) {
    return uploadPartnerImage(file, field);
  }
  return null;
}

export async function createPartnerAction(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const website_url = normalizeUrl(String(formData.get("website_url") ?? "").trim());

  if (!name || !website_url) {
    redirect(
      `/admin/partners/new?error=${encodeURIComponent("Name and website are required")}`
    );
  }

  const logo_url = await uploadIfPresent(formData, "logo");
  const picture_url = await uploadIfPresent(formData, "picture");
  const existing = await getPartners();

  await createPartner({
    name,
    website_url,
    logo_url,
    picture_url,
    sort_order: existing.length,
  });

  revalidatePath("/admin/partners");
  revalidatePath("/partners");
  redirect("/admin/partners");
}

export async function updatePartnerAction(id: string, formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const website_url = normalizeUrl(String(formData.get("website_url") ?? "").trim());

  if (!name || !website_url) {
    redirect(
      `/admin/partners/${id}/edit?error=${encodeURIComponent("Name and website are required")}`
    );
  }

  const logo_url = await uploadIfPresent(formData, "logo");
  const picture_url = await uploadIfPresent(formData, "picture");

  await updatePartner(id, {
    name,
    website_url,
    ...(logo_url ? { logo_url } : {}),
    ...(picture_url ? { picture_url } : {}),
  });

  revalidatePath("/admin/partners");
  revalidatePath("/partners");
  redirect("/admin/partners");
}

export async function deletePartnerAction(id: string) {
  await deletePartner(id);
  revalidatePath("/admin/partners");
  revalidatePath("/partners");
}
