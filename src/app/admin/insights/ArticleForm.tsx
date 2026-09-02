import Image from "next/image";
import type { Article } from "@/lib/articles";

export default function ArticleForm({
  action,
  article,
  error,
  submitLabel,
}: {
  action: (formData: FormData) => void;
  article?: Article;
  error?: string;
  submitLabel: string;
}) {
  return (
    <form action={action} className="mt-8 flex max-w-2xl flex-col gap-6">
      {error && (
        <p className="rounded-md bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      )}

      <div>
        <label htmlFor="title" className="text-sm font-medium text-ink">
          Title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          required
          defaultValue={article?.title}
          placeholder="e.g. What the RBI's revised BC guidelines mean for agency banking"
          className="mt-1.5 w-full rounded-md border border-rule px-3 py-2 text-sm text-ink focus:border-accent focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="slug" className="text-sm font-medium text-ink">
          URL slug
        </label>
        <input
          id="slug"
          name="slug"
          type="text"
          defaultValue={article?.slug}
          placeholder="leave blank to generate from the title"
          className="mt-1.5 w-full rounded-md border border-rule px-3 py-2 text-sm text-ink focus:border-accent focus:outline-none"
        />
        <p className="mt-1 text-xs text-ink-faint">
          Appears in the URL as /insights/your-slug. Only letters, numbers and
          dashes.
        </p>
      </div>

      <div>
        <label htmlFor="tag" className="text-sm font-medium text-ink">
          Tag
        </label>
        <input
          id="tag"
          name="tag"
          type="text"
          defaultValue={article?.tag}
          placeholder="e.g. Regulatory, Payments, Case Study"
          className="mt-1.5 w-full rounded-md border border-rule px-3 py-2 text-sm text-ink focus:border-accent focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="excerpt" className="text-sm font-medium text-ink">
          Excerpt
        </label>
        <textarea
          id="excerpt"
          name="excerpt"
          required
          rows={2}
          defaultValue={article?.excerpt}
          placeholder="One or two sentences shown on the article card"
          className="mt-1.5 w-full rounded-md border border-rule px-3 py-2 text-sm text-ink focus:border-accent focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="cover" className="text-sm font-medium text-ink">
          Cover photo
        </label>
        {article?.cover_image_url && (
          <div className="relative mt-2 h-24 w-40 overflow-hidden rounded-lg border border-rule bg-white">
            <Image
              src={article.cover_image_url}
              alt=""
              fill
              className="object-cover"
            />
          </div>
        )}
        <input
          id="cover"
          name="cover"
          type="file"
          accept="image/*"
          className="mt-1.5 block w-full text-sm text-ink-soft file:mr-4 file:rounded-md file:border-0 file:bg-ink file:px-3 file:py-1.5 file:text-sm file:font-semibold file:text-white hover:file:bg-ink-2"
        />
        <p className="mt-1 text-xs text-ink-faint">
          Shown on the article card and index page.
          {article ? " Leave blank to keep the current cover photo." : ""}
        </p>
      </div>

      <div>
        <label htmlFor="content" className="text-sm font-medium text-ink">
          Content
        </label>
        <textarea
          id="content"
          name="content"
          required
          rows={16}
          defaultValue={article?.content}
          placeholder={
            "Write your article here.\n\nLeave a blank line between paragraphs.\n\n## Use a line starting with ## for a subheading"
          }
          className="mt-1.5 w-full rounded-md border border-rule px-3 py-2 font-mono text-sm text-ink focus:border-accent focus:outline-none"
        />
        <p className="mt-1 text-xs text-ink-faint">
          Leave a blank line between paragraphs. Start a line with{" "}
          <code className="rounded bg-paper-2 px-1 py-0.5">## </code>{" "}
          to add a subheading.
        </p>
      </div>

      <div>
        <label htmlFor="status" className="text-sm font-medium text-ink">
          Status
        </label>
        <select
          id="status"
          name="status"
          defaultValue={article?.status ?? "draft"}
          className="mt-1.5 w-full rounded-md border border-rule px-3 py-2 text-sm text-ink focus:border-accent focus:outline-none"
        >
          <option value="draft">Draft (not visible on the site)</option>
          <option value="published">Published (visible on /insights)</option>
        </select>
      </div>

      <button
        type="submit"
        className="inline-flex w-fit items-center justify-center rounded-md bg-ink px-6 py-2.5 text-sm font-semibold text-white hover:bg-ink-2 transition-colors"
      >
        {submitLabel}
      </button>
    </form>
  );
}
