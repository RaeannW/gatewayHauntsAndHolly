import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// When COMING_SOON="true", every public request is rewritten to /coming-soon.
// The URL in the address bar stays the same; visitors just see the holding page.
// Set COMING_SOON=true on Vercel PRODUCTION only, leave it off for Preview,
// so your preview deploys keep showing the real site while you build.
export function proxy(request: NextRequest) {
  if (process.env.COMING_SOON === "true") {
    const url = request.nextUrl.clone();
    url.pathname = "/coming-soon";
    return NextResponse.rewrite(url);
  }
  return NextResponse.next();
}

export const config = {
  // Gate everything EXCEPT: the coming-soon page itself, API routes (so the
  // signup form can submit), and static assets (so the page can load its CSS/fonts/images).
  matcher: [
    "/((?!coming-soon|api|studio|_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|svg|gif|webp|ico|css|js|woff|woff2|ttf|otf)).*)",
  ],
};
