import { NextResponse } from 'next/server';
import { url } from 'next/dist/compiled/@edge-runtime/primitives/url';

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  // Redirect for /login and /register to subdomains
  if (pathname === '/login') {
    const loginUrl = new URL('https://login.gtphprivateserver.site');
    return NextResponse.redirect(loginUrl);
  }

  if (pathname === '/register') {
    const registerUrl = new URL('https://register.gtphprivateserver.site');
    return NextResponse.redirect(registerUrl);
  }

  return NextResponse.next();
}
