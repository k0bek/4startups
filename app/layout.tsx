import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { constructMetadata } from "@/lib/utils/";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { ModeToggle } from "@/components/shared/mode-toggle";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata = constructMetadata();
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
            <ModeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
