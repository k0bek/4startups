import { DM_Sans } from "next/font/google";
import "../globals.css";
import { constructMetadata } from "@/lib/utils/";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { ModeToggle } from "@/components/shared/mode-toggle";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Toaster } from "@/components/ui/toaster";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata = constructMetadata();
export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={font.className} suppressHydrationWarning={true}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
          <ModeToggle />
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
