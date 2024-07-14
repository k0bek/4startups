import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { constructMetadata } from "@/lib/utils/";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata = constructMetadata();
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>{children}</body>
    </html>
  );
}
