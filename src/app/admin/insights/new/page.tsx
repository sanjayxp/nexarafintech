import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/ssr";
import AdminHeader from "@/components/admin/AdminHeader";
import ArticleForm from "../ArticleForm";
import { createArticleAction } from "../actions";

export const metadata: Metadata = {
  title: "Write article | Nexara Fintech Admin",
  robots: { index: false, follow: false },
};

export default async function NewArticlePage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <>
      <AdminHeader />
      <main className="container-page py-12">
        <Link
          href="/admin/insights"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-slate hover:text-brand-navy"
        >
          <ArrowLeft size={14} />
          Back to insights
        </Link>
        <h1 className="mt-4 text-2xl font-semibold tracking-tight text-brand-navy">
          Write article
        </h1>
        <ArticleForm
          action={createArticleAction}
          error={error}
          submitLabel="Save article"
        />
      </main>
    </>
  );
}
