import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function middleware() {
    const supabase = createRouteHandlerClient({ cookies });
    const { data, error } = await supabase.auth.getSession();

    if (error || data.session?.user.id) {
        return new Response("Unauthorized", { status: 401 })
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/((?!api/auth|auth|_next/static|_next/image|favicon.ico).*)',
    ],
}