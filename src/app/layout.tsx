import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const description =
  "Nexara Fintech builds agency banking, connected banking APIs, and market-entry advisory for banks, NBFCs, MFIs and fintechs across India, Africa, the Middle East, and Asia Pacific.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Nexara Fintech | Agency Banking, Payments & Connected Banking Solutions",
    template: "%s | Nexara Fintech",
  },
  description,
  keywords: [
    "agency banking",
    "business correspondent platform",
    "connected banking API",
    "banking as a service",
    "financial inclusion",
    "payment infrastructure",
    "fintech advisory",
    "market entry",
  ],
  openGraph: {
    type: "website",
    siteName: "Nexara Fintech",
    title:
      "Nexara Fintech | Agency Banking, Payments & Connected Banking Solutions",
    description,
    url: SITE_URL,
    locale: "en",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexara Fintech",
    description,
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-[var(--foreground)]">
        {children}
      </body>
    </html>
  );
}
