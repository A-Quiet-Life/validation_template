import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { siteConfig } from "@/config/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

/**
 * Root Layout with Clerk Integration (Next.js App Router)
 *
 * ✅ Uses <ClerkProvider> from @clerk/nextjs (App Router)
 * ✅ Wraps the entire application
 *
 * This is the CURRENT, CORRECT approach for Clerk.
 * Do NOT use the old Pages Router approach (_app.tsx).
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
