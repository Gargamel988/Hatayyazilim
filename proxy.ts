import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const host = request.headers.get('host');
  const protocol = request.headers.get('x-forwarded-proto') || 'http';
  const { pathname, search } = request.nextUrl;

  // Canonical Domain (WWW'siz ve HTTPS)
  const canonicalDomain = 'hatayyazilim.com';
  
  // 1. WWW -> Non-WWW veya Yanlış Domain Kontrolü
  // 2. HTTP -> HTTPS Kontrolü
  const isWww = host?.startsWith('www.');
  const isHttp = protocol === 'http';

  if ((isWww || isHttp) && process.env.NODE_ENV === 'production') {
    return NextResponse.redirect(
      `https://${canonicalDomain}${pathname}${search}`,
      301
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * API, static dosyalar ve resimler hariç tüm sayfalar
     */
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.png$).*)',
  ],
};
