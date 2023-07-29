import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.endsWith(".svg") || request.nextUrl.pathname.endsWith(".png")) {
        return NextResponse.next();
    }

    const response = NextResponse.next();
    const supabase = createMiddlewareClient({ req: request, res: response }, {
        supabaseUrl: process.env.IN_CONTAINER_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL,
    });
    const { data, error } = await supabase.auth.getSession();

    if (error || data.session == null) {
        return NextResponse.redirect(new URL('/auth/login', request.url));
    }
    // ログイン済みなら/homeにリダイレクト
    if (request.nextUrl.pathname === '/') {
        return NextResponse.redirect(new URL('/home', request.url));
    }

    return response;
}

export const config = {
    matcher: ['/((?!api|auth|_next/static|_next/image|favicon.ico|public).*)']
}