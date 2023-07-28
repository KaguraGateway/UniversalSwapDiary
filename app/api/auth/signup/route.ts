import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest } from "next/server";
import { cookies } from "next/headers";

export default async function POST(request: NextRequest) {
    const params = await request.json();
    const supabase = createRouteHandlerClient({ cookies });

    return await supabase.auth.admin.createUser({
        email: params.email,
        password: params.password,
        email_confirm: true,
        user_metadata: { username: params.username }
    });
}