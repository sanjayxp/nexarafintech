import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const description =
  "Nexara Fintech builds agency banking and connected banking API infrastructure for banks, NBFCs, MFIs and fintechs across India, Africa, the Middle East, and Asia Pacific.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Nexara Fintech — Banking infrastructure for the last mile",
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
    title: "Nexara Fintech — Banking infrastructure for the last mile",
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
      className={`${inter.variable} ${instrumentSerif.variable} ${jetbrains.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        {children}
      </body>
    </html>
  );
}
