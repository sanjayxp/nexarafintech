"use client";

import { useState, useTransition } from "react";
import { deletePartnerAction } from "./actions";

export default function DeletePartnerButton({
  id,
  name,
}: {
  id: string;
  name: string;
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
      <span className="text-sm text-ink-soft">Delete {name}?</span>
      <button
        type="button"
        disabled={pending}
        onClick={() => startTransition(() => deletePartnerAction(id))}
        className="text-sm font-semibold text-red-600 hover:text-red-700 disabled:opacity-50"
      >
        {pending ? "Deleting…" : "Confirm"}
      </button>
      <button
        type="button"
        onClick={() => setConfirming(false)}
        className="text-sm text-ink-soft hover:text-ink"
      >
        Cancel
      </button>
    </span>
  );
}
