
import { NextResponse } from "next/server";
import { verifyToken } from "./lib/auth";

export async function middleware(request) {

  const token = request.cookies.get("token")?.value;

  const pathname = request.nextUrl.pathname;


  if (pathname === "/admin/login") {

    if (token) {

      const user = await verifyToken(token);

      if (user) {
        return NextResponse.redirect(
          new URL("/admin/dashboard", request.url)
        );
      }
    }

    return NextResponse.next();
  }


  if (pathname.startsWith("/admin")) {

    if (!token) {

      return NextResponse.redirect(
        new URL("/admin/login", request.url)
      );
    }

    const user = await verifyToken(token);

    if (!user) {

      return NextResponse.redirect(
        new URL("/admin/login", request.url)
      );
    }
  }

  return NextResponse.next();
}


export const config = {
  matcher: [
    "/admin/:path*",
  ],
};