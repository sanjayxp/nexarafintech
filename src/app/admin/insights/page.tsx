import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Plus } from "@phosphor-icons/react/ssr";
import AdminHeader from "@/components/admin/AdminHeader";
import { getAllArticles } from "@/lib/articles";
import DeleteArticleButton from "./DeleteArticleButton";

export const metadata: Metadata = {
  title: "Manage insights · Admin",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function AdminInsightsPage() {
  const articles = await getAllArticles();

  return (
    <>
      <AdminHeader />
      <main className="container-page py-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-ink">
              Insights
            </h1>
            <p className="mt-1 text-sm text-ink-soft">
              Write, edit, and publish the articles shown on the public{" "}
              <Link href="/insights" className="text-accent hover:underline">
                /insights
              </Link>{" "}
              page. Only articles marked <strong>Published</strong> appear
              there.
            </p>
          </div>
          <Link
            href="/admin/insights/new"
            className="inline-flex items-center gap-2 rounded-md bg-ink px-4 py-2.5 text-sm font-semibold text-white hover:bg-ink-2 transition-colors"
          >
            <Plus size={16} weight="bold" />
            Write article
          </Link>
        </div>

        {articles.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-dashed border-rule p-10 text-center text-sm text-ink-soft">
            No articles yet. Write your first one to have it appear on the
            public Insights page.
          </div>
        ) : (
          <div className="mt-10 overflow-hidden rounded-2xl border border-rule">
            <table className="w-full text-left text-sm">
              <thead className="bg-paper-2 text-xs font-semibold uppercase tracking-wide text-ink-faint">
                <tr>
                  <th className="px-5 py-3">Cover</th>
                  <th className="px-5 py-3">Title</th>
                  <th className="px-5 py-3">Tag</th>
                  <th className="px-5 py-3">Status</th>
                  <th className="px-5 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-rule">
                {articles.map((article) => (
                  <tr key={article.id}>
                    <td className="px-5 py-3">
                      {article.cover_image_url ? (
                        <div className="relative h-10 w-16 overflow-hidden rounded-lg border border-rule bg-white">
                          <Image
                            src={article.cover_image_url}
                            alt=""
                            fill
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <div className="flex h-10 w-16 items-center justify-center rounded-lg bg-paper-2 text-xs text-ink-faint">
                          —
                        </div>
                      )}
                    </td>
                    <td className="max-w-xs px-5 py-3 font-medium text-ink">
                      {article.title}
                    </td>
                    <td className="px-5 py-3 text-ink-soft">{article.tag}</td>
                    <td className="px-5 py-3">
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                          article.status === "published"
                            ? "bg-accent-soft text-accent"
                            : "bg-paper-2 text-ink-soft"
                        }`}
                      >
                        {article.status === "published" ? "Published" : "Draft"}
                      </span>
                    </td>
                    <td className="px-5 py-3">
                      <div className="flex items-center justify-end gap-4">
                        <Link
                          href={`/admin/insights/${article.id}/edit`}
                          className="text-sm font-medium text-accent hover:underline"
                        >
                          Edit
                        </Link>
                        <DeleteArticleButton
                          id={article.id}
                          title={article.title}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </>
  );
}
