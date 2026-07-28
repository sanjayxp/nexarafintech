import "server-only";
import { supabase } from "./supabase";

export type Article = {
  id: string;
  title: string;
  slug: string;
  tag: string;
  excerpt: string;
  content: string;
  cover_image_url: string | null;
  status: "draft" | "published";
  published_at: string | null;
  created_at: string;
};

export async function getPublishedArticles(): Promise<Article[]> {
  const { data, error } = await supabase
    .from("nexara_articles")
    .select("*")
    .eq("status", "published")
    .order("published_at", { ascending: false });

  if (error) throw new Error(error.message);
  return data ?? [];
}

export async function getPublishedArticleBySlug(
  slug: string
): Promise<Article | null> {
  const { data, error } = await supabase
    .from("nexara_articles")
    .select("*")
    .eq("slug", slug)
    .eq("status", "published")
    .maybeSingle();

  if (error) throw new Error(error.message);
  return data;
}

export async function getAllArticles(): Promise<Article[]> {
  const { data, error } = await supabase
    .from("nexara_articles")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);
  return data ?? [];
}

export async function getArticle(id: string): Promise<Article | null> {
  const { data, error } = await supabase
    .from("nexara_articles")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) throw new Error(error.message);
  return data;
}

export async function createArticle(input: {
  title: string;
  slug: string;
  tag: string;
  excerpt: string;
  content: string;
  cover_image_url: string | null;
  status: "draft" | "published";
  published_at: string | null;
}): Promise<Article> {
  const { data, error } = await supabase
    .from("nexara_articles")
    .insert(input)
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
}

export async function updateArticle(
  id: string,
  input: Partial<{
    title: string;
    slug: string;
    tag: string;
    excerpt: string;
    content: string;
    cover_image_url: string | null;
    status: "draft" | "published";
    published_at: string | null;
  }>
): Promise<Article> {
  const { data, error } = await supabase
    .from("nexara_articles")
    .update({ ...input, updated_at: new Date().toISOString() })
    .eq("id", id)
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
}

export async function deleteArticle(id: string): Promise<void> {
  const article = await getArticle(id);
  if (article?.cover_image_url) {
    const path = storagePathFromUrl(article.cover_image_url);
    if (path) {
      await supabase.storage.from("nexara-articles").remove([path]);
    }
  }

  const { error } = await supabase.from("nexara_articles").delete().eq("id", id);
  if (error) throw new Error(error.message);
}

function storagePathFromUrl(url: string): string | null {
  const marker = "/object/public/nexara-articles/";
  const i = url.indexOf(marker);
  return i === -1 ? null : url.slice(i + marker.length);
}

export async function uploadArticleImage(file: File): Promise<string> {
  const ext = file.name.split(".").pop() || "jpg";
  const path = `cover/${crypto.randomUUID()}.${ext}`;

  const { error } = await supabase.storage
    .from("nexara-articles")
    .upload(path, file, { contentType: file.type, upsert: false });

  if (error) throw new Error(error.message);

  const { data } = supabase.storage.from("nexara-articles").getPublicUrl(path);
  return data.publicUrl;
}

export type ContentBlock = { heading?: string; paragraphs: string[] };

export function parseArticleContent(content: string): ContentBlock[] {
  const chunks = content
    .split(/\n\s*\n/)
    .map((c) => c.trim())
    .filter(Boolean);

  const blocks: ContentBlock[] = [];
  let current: ContentBlock = { paragraphs: [] };

  for (const chunk of chunks) {
    if (chunk.startsWith("## ")) {
      if (current.paragraphs.length || current.heading) blocks.push(current);
      current = { heading: chunk.slice(3).trim(), paragraphs: [] };
    } else {
      current.paragraphs.push(chunk);
    }
  }
  if (current.paragraphs.length || current.heading) blocks.push(current);

  return blocks;
}

export function slugify(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
