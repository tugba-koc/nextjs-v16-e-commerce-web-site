import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  let locale = request.cookies.get("locale")?.value;

  if (!locale) {
    locale = request.headers.get("accept-language")?.startsWith("en")
      ? "en"
      : "tr";
  }

  const response = NextResponse.next();

  response.cookies.set("locale", locale, {
    path: "/",
    httpOnly: true,
    sameSite: "lax",
  });

  return response;
}

// Sadece sayfa isteklerini yakala (Statik dosyaları es geç)
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
