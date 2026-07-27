import Link from "next/link";
import { logout } from "@/app/admin/login/actions";
import Logo from "@/components/Logo";

export default function AdminHeader() {
  return (
    <header className="border-b border-brand-border bg-white">
      <div className="container-page flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Logo />
          <span className="rounded-full bg-brand-navy/5 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-brand-navy">
            Admin
          </span>
        </div>
        <nav className="flex items-center gap-6">
          <Link
            href="/admin/partners"
            className="text-sm font-medium text-brand-slate hover:text-brand-navy transition-colors"
          >
            Partners
          </Link>
          <form action={logout}>
            <button
              type="submit"
              className="text-sm font-medium text-brand-slate hover:text-brand-navy transition-colors"
            >
              Sign out
            </button>
          </form>
        </nav>
      </div>
    </header>
  );
}
