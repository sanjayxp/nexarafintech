import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "@phosphor-icons/react/ssr";
import AdminHeader from "@/components/admin/AdminHeader";
import { getArticle } from "@/lib/articles";
import ArticleForm from "../../ArticleForm";
import { updateArticleAction } from "../../actions";

export const metadata: Metadata = {
  title: "Edit article · Admin",
  robots: { index: false, follow: false },
};

export default async function EditArticlePage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ error?: string }>;
}) {
  const { id } = await params;
  const { error } = await searchParams;
  const article = await getArticle(id);
  if (!article) notFound();

  const action = updateArticleAction.bind(null, id);

  return (
    <>
      <AdminHeader />
      <main className="container-page py-12">
        <Link
          href="/admin/insights"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-bone-dim hover:text-bone"
        >
          <ArrowLeft size={14} />
          Back to insights
        </Link>
        <h1 className="mt-4 text-2xl font-semibold tracking-tight text-bone">
          Edit {article.title}
        </h1>
        <ArticleForm
          action={action}
          article={article}
          error={error}
          submitLabel="Save changes"
        />
      </main>
    </>
  );
}
