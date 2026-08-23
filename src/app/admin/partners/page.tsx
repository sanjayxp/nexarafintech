import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Plus } from "@phosphor-icons/react/ssr";
import AdminHeader from "@/components/admin/AdminHeader";
import { getPartners } from "@/lib/partners";
import DeletePartnerButton from "./DeletePartnerButton";

export const metadata: Metadata = {
  title: "Manage partners · Admin",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function AdminPartnersPage() {
  const partners = await getPartners();

  return (
    <>
      <AdminHeader />
      <main className="container-page py-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-brand-navy">
              Partners
            </h1>
            <p className="mt-1 text-sm text-brand-slate">
              Add, edit, or remove the partners shown on the public{" "}
              <Link href="/partners" className="text-brand-blue hover:underline">
                /partners
              </Link>{" "}
              page.
            </p>
          </div>
          <Link
            href="/admin/partners/new"
            className="inline-flex items-center gap-2 rounded-md bg-brand-navy px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-navy-2 transition-colors"
          >
            <Plus size={16} weight="bold" />
            Add partner
          </Link>
        </div>

        {partners.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-dashed border-brand-border p-10 text-center text-sm text-brand-slate">
            No partners yet. Add your first one to have it appear on the
            public Partners page.
          </div>
        ) : (
          <div className="mt-10 overflow-hidden rounded-2xl border border-brand-border">
            <table className="w-full text-left text-sm">
              <thead className="bg-brand-surface text-xs font-semibold uppercase tracking-wide text-brand-slate-light">
                <tr>
                  <th className="px-5 py-3">Logo</th>
                  <th className="px-5 py-3">Name</th>
                  <th className="px-5 py-3">Website</th>
                  <th className="px-5 py-3">Picture</th>
                  <th className="px-5 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-border">
                {partners.map((partner) => (
                  <tr key={partner.id}>
                    <td className="px-5 py-3">
                      {partner.logo_url ? (
                        <div className="relative h-10 w-10 overflow-hidden rounded-lg border border-brand-border bg-white">
                          <Image
                            src={partner.logo_url}
                            alt={partner.name}
                            fill
                            className="object-contain p-1.5"
                          />
                        </div>
                      ) : (
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-surface text-xs text-brand-slate-light">
                          —
                        </div>
                      )}
                    </td>
                    <td className="px-5 py-3 font-medium text-brand-navy">
                      {partner.name}
                    </td>
                    <td className="px-5 py-3">
                      <a
                        href={partner.website_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-blue hover:underline"
                      >
                        {partner.website_url.replace(/^https?:\/\//, "")}
                      </a>
                    </td>
                    <td className="px-5 py-3 text-brand-slate">
                      {partner.picture_url ? "Yes" : "—"}
                    </td>
                    <td className="px-5 py-3">
                      <div className="flex items-center justify-end gap-4">
                        <Link
                          href={`/admin/partners/${partner.id}/edit`}
                          className="text-sm font-medium text-brand-blue hover:underline"
                        >
                          Edit
                        </Link>
                        <DeletePartnerButton
                          id={partner.id}
                          name={partner.name}
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
