import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  console.log("********** MIDDLEWARE ****************");
  console.log("Calling middleware", "redirecting /about to /todos...");

  if (request.nextUrl.pathname.startsWith('/about')) {
    return NextResponse.rewrite(new URL('/todos', request.url));
  }

  
}