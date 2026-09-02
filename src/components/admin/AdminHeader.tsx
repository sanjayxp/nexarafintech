import Link from "next/link";
import { logout } from "@/app/admin/login/actions";
import Logo from "@/components/Logo";

export default function AdminHeader() {
  return (
    <header className="border-b border-rule bg-white">
      <div className="container-page flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Logo />
          <span className="rounded-full bg-ink/5 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-ink">
            Admin
          </span>
        </div>
        <nav className="flex items-center gap-6">
          <Link
            href="/admin/insights"
            className="text-sm font-medium text-ink-soft hover:text-ink transition-colors"
          >
            Insights
          </Link>
          <Link
            href="/admin/partners"
            className="text-sm font-medium text-ink-soft hover:text-ink transition-colors"
          >
            Partners
          </Link>
          <form action={logout}>
            <button
              type="submit"
              className="text-sm font-medium text-ink-soft hover:text-ink transition-colors"
            >
              Sign out
            </button>
          </form>
        </nav>
      </div>
    </header>
  );
}
