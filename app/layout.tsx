import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { CursorGlow } from "@/components/cursor-glow";
import { PageTransition } from "@/components/page-transition";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap", preload: true });

export const metadata: Metadata = {
  metadataBase: new URL("https://example-seo.agency"),
  title: {
    default: "High-performance SEO Agency",
    template: "%s | High-performance SEO Agency"
  },
  description: "Enterprise SEO agency focused on measurable traffic, leads, and pipeline growth.",
  openGraph: {
    title: "High-performance SEO Agency",
    description: "Technical SEO, content strategy, and CRO engineered for predictable growth.",
    type: "website",
    url: "https://example-seo.agency"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <CursorGlow>
          <PageTransition>{children}</PageTransition>
        </CursorGlow>
      </body>
    </html>
  );
}
