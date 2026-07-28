"use client";

import { useState, useTransition } from "react";
import { deleteArticleAction } from "./actions";

export default function DeleteArticleButton({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  const [confirming, setConfirming] = useState(false);
  const [pending, startTransition] = useTransition();

  if (!confirming) {
    return (
      <button
        type="button"
        onClick={() => setConfirming(true)}
        className="text-sm font-medium text-red-600 hover:text-red-700"
      >
        Delete
      </button>
    );
  }

  return (
    <span className="inline-flex items-center gap-3">
      <span className="text-sm text-brand-slate">Delete {title}?</span>
      <button
        type="button"
        disabled={pending}
        onClick={() => startTransition(() => deleteArticleAction(id))}
        className="text-sm font-semibold text-red-600 hover:text-red-700 disabled:opacity-50"
      >
        {pending ? "Deleting…" : "Confirm"}
      </button>
      <button
        type="button"
        onClick={() => setConfirming(false)}
        className="text-sm text-brand-slate hover:text-brand-navy"
      >
        Cancel
      </button>
    </span>
  );
}
