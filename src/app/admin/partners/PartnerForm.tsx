import Image from "next/image";
import type { Partner } from "@/lib/partners";

export default function PartnerForm({
  action,
  partner,
  error,
  submitLabel,
}: {
  action: (formData: FormData) => void;
  partner?: Partner;
  error?: string;
  submitLabel: string;
}) {
  return (
    <form action={action} className="mt-8 flex max-w-xl flex-col gap-6">
      {error && (
        <p className="rounded-md bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      )}

      <div>
        <label htmlFor="name" className="text-sm font-medium text-bone">
          Partner name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          defaultValue={partner?.name}
          placeholder="e.g. Yes Bank"
          className="mt-1.5 w-full rounded-md border border-rule px-3 py-2 text-sm text-bone focus:border-mint focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="website_url"
          className="text-sm font-medium text-bone"
        >
          Website
        </label>
        <input
          id="website_url"
          name="website_url"
          type="text"
          required
          defaultValue={partner?.website_url}
          placeholder="https://partner-website.com"
          className="mt-1.5 w-full rounded-md border border-rule px-3 py-2 text-sm text-bone focus:border-mint focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="logo" className="text-sm font-medium text-bone">
          Logo
        </label>
        {partner?.logo_url && (
          <div className="relative mt-2 h-12 w-12 overflow-hidden rounded-lg border border-rule bg-white">
            <Image
              src={partner.logo_url}
              alt=""
              fill
              className="object-contain p-1.5"
            />
          </div>
        )}
        <input
          id="logo"
          name="logo"
          type="file"
          accept="image/*"
          className="mt-1.5 block w-full text-sm text-bone-dim file:mr-4 file:rounded-md file:border-0 file:bg-bone file:px-3 file:py-1.5 file:text-sm file:font-semibold file:text-white hover:file:bg-ground-3"
        />
        <p className="mt-1 text-xs text-bone-faint">
          Square logo, transparent background works best.
          {partner ? " Leave blank to keep the current logo." : ""}
        </p>
      </div>

      <div>
        <label
          htmlFor="picture"
          className="text-sm font-medium text-bone"
        >
          Picture
        </label>
        {partner?.picture_url && (
          <div className="relative mt-2 h-24 w-40 overflow-hidden rounded-lg border border-rule bg-white">
            <Image
              src={partner.picture_url}
              alt=""
              fill
              className="object-cover"
            />
          </div>
        )}
        <input
          id="picture"
          name="picture"
          type="file"
          accept="image/*"
          className="mt-1.5 block w-full text-sm text-bone-dim file:mr-4 file:rounded-md file:border-0 file:bg-bone file:px-3 file:py-1.5 file:text-sm file:font-semibold file:text-white hover:file:bg-ground-3"
        />
        <p className="mt-1 text-xs text-bone-faint">
          Optional. A wider photo shown on the partner&apos;s card.
          {partner ? " Leave blank to keep the current picture." : ""}
        </p>
      </div>

      <button
        type="submit"
        className="inline-flex w-fit items-center justify-center rounded-md bg-bone px-6 py-2.5 text-sm font-semibold text-white hover:bg-ground-3 transition-colors"
      >
        {submitLabel}
      </button>
    </form>
  );
}
