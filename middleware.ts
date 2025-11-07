import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Protect /admin routes (except /admin/login)
  if (request.nextUrl.pathname.startsWith("/admin") && 
      request.nextUrl.pathname !== "/admin/login" &&
      !request.nextUrl.pathname.startsWith("/admin/studio")) {
    const authCookie = request.cookies.get("admin-auth");
    
    if (authCookie?.value !== "authenticated") {
      const url = request.nextUrl.clone();
      url.pathname = "/admin/login";
      return NextResponse.redirect(url);
    }
  }

  // Protect /admin/studio (Sanity Studio)
  if (request.nextUrl.pathname.startsWith("/admin/studio")) {
    const authCookie = request.cookies.get("admin-auth");
    
    if (authCookie?.value !== "authenticated") {
      const url = request.nextUrl.clone();
      url.pathname = "/admin/login";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};

