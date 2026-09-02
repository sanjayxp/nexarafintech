import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans, DM_Mono } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const description =
  "Nexara Fintech builds the payout rails, collection accounts and agent networks that banks, NBFCs and fintechs use to reach customers past the branch — across India, Africa, the Middle East and Asia Pacific.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Nexara Fintech — Money that gets all the way there",
    template: "%s · Nexara Fintech",
  },
  description,
  keywords: [
    "agency banking",
    "business correspondent platform",
    "connected banking API",
    "banking as a service",
    "financial inclusion",
    "payment infrastructure",
    "AePS micro ATM",
    "market entry",
  ],
  openGraph: {
    type: "website",
    siteName: "Nexara Fintech",
    title: "Nexara Fintech — Money that gets all the way there",
    description,
    url: SITE_URL,
    locale: "en",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexara Fintech",
    description,
  },
  alternates: { canonical: SITE_URL },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${instrumentSans.variable} ${dmMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-ground text-bone">
        {children}
      </body>
    </html>
  );
}
