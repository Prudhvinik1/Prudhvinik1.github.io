import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  const url = request.nextUrl.clone();
  
  // Check if accessing /refer route
  if (url.pathname.startsWith("/refer")) {
    // Allow access only from refer.prudhvi.tech subdomain
    // In development, allow localhost
    const isReferSubdomain = hostname.startsWith("refer.prudhvi.tech") || 
                            hostname.startsWith("refer.") ||
                            hostname.includes("localhost");
    
    if (!isReferSubdomain) {
      // Redirect to main site or show 403
      if (hostname.includes("prudhvi.tech") || hostname.includes("localhost")) {
        // Redirect to main portfolio
        url.pathname = "/";
        return NextResponse.redirect(url);
      } else {
        // Return 403 for other domains
        return new NextResponse("Forbidden: Referral page is only accessible via refer.prudhvi.tech", {
          status: 403,
        });
      }
    }
  }

  // Protect /admin routes (except /admin/login)
  if (request.nextUrl.pathname.startsWith("/admin") && 
      request.nextUrl.pathname !== "/admin/login" &&
      !request.nextUrl.pathname.startsWith("/admin/studio")) {
    const authCookie = request.cookies.get("admin-auth");
    
    if (authCookie?.value !== "authenticated") {
      const adminUrl = request.nextUrl.clone();
      adminUrl.pathname = "/admin/login";
      return NextResponse.redirect(adminUrl);
    }
  }

  // Protect /admin/studio (Sanity Studio)
  if (request.nextUrl.pathname.startsWith("/admin/studio")) {
    const authCookie = request.cookies.get("admin-auth");
    
    if (authCookie?.value !== "authenticated") {
      const studioUrl = request.nextUrl.clone();
      studioUrl.pathname = "/admin/login";
      return NextResponse.redirect(studioUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/refer/:path*"],
};

