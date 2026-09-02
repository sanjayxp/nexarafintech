import type { Metadata } from "next";
import { login } from "./actions";

export const metadata: Metadata = {
  title: "Admin sign in",
  robots: { index: false, follow: false },
};

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; from?: string }>;
}) {
  const { error, from } = await searchParams;

  return (
    <main className="flex min-h-screen items-center justify-center bg-bone px-4">
      <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-xl">
        <h1 className="text-xl font-semibold text-bone">Admin sign in</h1>
        <p className="mt-1 text-sm text-bone-dim">
          Nexara Fintech website admin
        </p>

        <form action={login} className="mt-6 flex flex-col gap-4">
          <input type="hidden" name="from" value={from ?? "/admin/partners"} />
          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium text-bone"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoFocus
              className="mt-1.5 w-full rounded-md border border-rule px-3 py-2 text-sm text-bone focus:border-mint focus:outline-none"
            />
          </div>

          {error && (
            <p className="text-sm text-red-600">
              Incorrect password. Try again.
            </p>
          )}

          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-md bg-bone px-4 py-2.5 text-sm font-semibold text-white hover:bg-ground-3 transition-colors"
          >
            Sign in
          </button>
        </form>
      </div>
    </main>
  );
}
