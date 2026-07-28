import "server-only";
import { supabase } from "./supabase";

export type Partner = {
  id: string;
  name: string;
  website_url: string;
  logo_url: string | null;
  picture_url: string | null;
  sort_order: number;
  created_at: string;
};

export async function getPartners(): Promise<Partner[]> {
  const { data, error } = await supabase
    .from("nexara_partners")
    .select("*")
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: true });

  if (error) throw new Error(error.message);
  return data ?? [];
}

export async function getPartner(id: string): Promise<Partner | null> {
  const { data, error } = await supabase
    .from("nexara_partners")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) throw new Error(error.message);
  return data;
}

export async function createPartner(input: {
  name: string;
  website_url: string;
  logo_url: string | null;
  picture_url: string | null;
  sort_order: number;
}): Promise<Partner> {
  const { data, error } = await supabase
    .from("nexara_partners")
    .insert(input)
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
}

export async function updatePartner(
  id: string,
  input: Partial<{
    name: string;
    website_url: string;
    logo_url: string | null;
    picture_url: string | null;
    sort_order: number;
  }>
): Promise<Partner> {
  const { data, error } = await supabase
    .from("nexara_partners")
    .update({ ...input, updated_at: new Date().toISOString() })
    .eq("id", id)
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
}

export async function deletePartner(id: string): Promise<void> {
  const partner = await getPartner(id);
  if (partner) {
    const paths = [partner.logo_url, partner.picture_url]
      .filter((url): url is string => Boolean(url))
      .map(storagePathFromUrl)
      .filter((p): p is string => Boolean(p));
    if (paths.length) {
      await supabase.storage.from("nexara-partners").remove(paths);
    }
  }

  const { error } = await supabase.from("nexara_partners").delete().eq("id", id);
  if (error) throw new Error(error.message);
}

function storagePathFromUrl(url: string): string | null {
  const marker = "/object/public/nexara-partners/";
  const i = url.indexOf(marker);
  return i === -1 ? null : url.slice(i + marker.length);
}

export async function uploadPartnerImage(
  file: File,
  kind: "logo" | "picture"
): Promise<string> {
  const ext = file.name.split(".").pop() || "jpg";
  const path = `${kind}/${crypto.randomUUID()}.${ext}`;

  const { error } = await supabase.storage
    .from("nexara-partners")
    .upload(path, file, { contentType: file.type, upsert: false });

  if (error) throw new Error(error.message);

  const { data } = supabase.storage.from("nexara-partners").getPublicUrl(path);
  return data.publicUrl;
}
