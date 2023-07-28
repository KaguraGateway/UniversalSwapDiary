import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { supabaseAdmin } from "@/app/lib/supabase";

/** API化しているのはauth-helperのバグのため、直ってたら不要 */
export async function POST(request: Request) {
    const params = await request.json();

    const { data, error } = await supabaseAdmin.auth.admin.createUser({
        email: params.email,
        password: params.password,
        email_confirm: true,
        user_metadata: { username: params.username }
    });

    if (error) {
        return NextResponse.json({ error }, { status: error.status ?? 500 });
    }

    return NextResponse.json(data);
}