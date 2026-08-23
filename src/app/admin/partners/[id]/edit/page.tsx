import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "@phosphor-icons/react/ssr";
import AdminHeader from "@/components/admin/AdminHeader";
import { getPartner } from "@/lib/partners";
import PartnerForm from "../../PartnerForm";
import { updatePartnerAction } from "../../actions";

export const metadata: Metadata = {
  title: "Edit partner · Admin",
  robots: { index: false, follow: false },
};

export default async function EditPartnerPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ error?: string }>;
}) {
  const { id } = await params;
  const { error } = await searchParams;
  const partner = await getPartner(id);
  if (!partner) notFound();

  const action = updatePartnerAction.bind(null, id);

  return (
    <>
      <AdminHeader />
      <main className="container-page py-12">
        <Link
          href="/admin/partners"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-slate hover:text-brand-navy"
        >
          <ArrowLeft size={14} />
          Back to partners
        </Link>
        <h1 className="mt-4 text-2xl font-semibold tracking-tight text-brand-navy">
          Edit {partner.name}
        </h1>
        <PartnerForm
          action={action}
          partner={partner}
          error={error}
          submitLabel="Save changes"
        />
      </main>
    </>
  );
}
