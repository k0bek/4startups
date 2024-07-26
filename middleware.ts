import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { auth } from "@/auth";

import { locales, type Locale } from "@/config/locales";
import createMiddleware from "next-intl/middleware";

const publicPages = ["/", "/sign-in", "/sign-up"];

const authPages = ["/sign-in", "/sign-up"];

const testPathnameRegex = (pages: string[], pathName: string): boolean => {
  return RegExp(
    `^(/(${locales.join("|")}))?(${pages.flatMap((p) => (p === "/" ? ["", "/"] : p)).join("|")})/?$`,
    "i"
  ).test(pathName);
};

const nextIntlMiddleware = createMiddleware({
  locales,
  defaultLocale: "pl" satisfies Locale,
  localePrefix: "never",
});

const authMiddleware = auth((req) => {
  const isAuthPage = testPathnameRegex(authPages, req.nextUrl.pathname);
  const session = req.auth;

  // Redirect to sign-in page if not authenticated
  if (!session && !isAuthPage) {
    return NextResponse.redirect(new URL("/sign-in", req.nextUrl));
  }

  // Redirect to home page if authenticated and trying to access auth pages
  if (session && isAuthPage) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  return nextIntlMiddleware(req);
});

const middleware = (req: NextRequest) => {
  const isPublicPage = testPathnameRegex(publicPages, req.nextUrl.pathname);
  const isAuthPage = testPathnameRegex(authPages, req.nextUrl.pathname);

  if (isAuthPage) {
    return (authMiddleware as any)(req);
  }

  if (isPublicPage) {
    return nextIntlMiddleware(req);
  } else {
    return (authMiddleware as any)(req);
  }
};

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};

export default middleware;
