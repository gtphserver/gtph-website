import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname, hostname } = request.nextUrl;
  
  // Match subdomains
  const subdomain = hostname.split('.')[0]; // e.g., "register" or "login"
  
  if (subdomain === 'register' && pathname === '/') {
    return NextResponse.rewrite(new URL('/register', request.url));
  }
  
  if (subdomain === 'login' && pathname === '/') {
    return NextResponse.rewrite(new URL('/login', request.url));
  }

  return NextResponse.next(); // Continue with default behavior
}
