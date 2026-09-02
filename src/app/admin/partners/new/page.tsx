import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/ssr";
import AdminHeader from "@/components/admin/AdminHeader";
import PartnerForm from "../PartnerForm";
import { createPartnerAction } from "../actions";

export const metadata: Metadata = {
  title: "Add partner · Admin",
  robots: { index: false, follow: false },
};

export default async function NewPartnerPage({
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
          href="/admin/partners"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-bone-dim hover:text-bone"
        >
          <ArrowLeft size={14} />
          Back to partners
        </Link>
        <h1 className="mt-4 text-2xl font-semibold tracking-tight text-bone">
          Add partner
        </h1>
        <PartnerForm
          action={createPartnerAction}
          error={error}
          submitLabel="Add partner"
        />
      </main>
    </>
  );
}
