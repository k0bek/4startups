import { NextRequest, NextResponse } from "next/server"
import createMiddleware from "next-intl/middleware"

import { locales, type Locale } from "@/config/locales"

const nextIntlMiddleware = createMiddleware({
  locales,
  defaultLocale: "pl" satisfies Locale,
  localePrefix: "never",
})

// eslint-disable-next-line func-names
export default function (req: NextRequest): NextResponse {
  return nextIntlMiddleware(req)
}

export const config = {
  // match only internationalized pathnames
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)

    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
}
