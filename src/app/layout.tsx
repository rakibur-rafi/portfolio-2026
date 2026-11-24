import type { Metadata, Viewport } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// TODO: set the real production URL (e.g. via NEXT_PUBLIC_SITE_URL) before deploy.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const name = "Mohammad Rakibur Rahaman";
const description =
  "Portfolio of Mohammad Rakibur Rahaman — a full stack web developer building clean interfaces with React, Next.js and TypeScript, backed by Node.js APIs.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${name} — Full Stack Web Developer`,
    template: "%s · Rakibur Rahaman",
  },
  description,
  keywords: [
    "full stack web developer",
    "frontend developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "portfolio",
    "Mohammad Rakibur Rahaman",
  ],
  authors: [{ name }],
  openGraph: {
    type: "website",
    siteName: `${name} — Portfolio`,
    title: `${name} — Full Stack Web Developer`,
    description,
    url: "/",
  },
  twitter: {
    card: "summary",
    title: `${name} — Full Stack Web Developer`,
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fdfdff" },
    { media: "(prefers-color-scheme: dark)", color: "#101320" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`h-full antialiased ${inter.variable} ${geistMono.variable} font-sans`}
    >
      <body className="flex min-h-svh flex-col bg-background text-foreground">
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
