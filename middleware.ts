import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";

import { locales, type Locale } from "@/config/locales";

const nextIntlMiddleware = createMiddleware({
  locales,
  defaultLocale: "pl" satisfies Locale,
  localePrefix: "never",
});

// Middleware to add custom header with current request URL
export function customMiddleware(request: Request): NextResponse {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-url", request.url);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

// eslint-disable-next-line func-names
export default function (req: NextRequest): NextResponse {
  const response = customMiddleware(req);
  return nextIntlMiddleware(req);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
