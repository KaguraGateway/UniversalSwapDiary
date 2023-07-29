import { prisma } from "@/lib/prisma";
import { supabaseAdmin } from "@/lib/supabase";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const supabase = createRouteHandlerClient({ cookies });
    const { data, error } = await supabase.auth.getSession();
    const userId = data.session?.user.id;

    if (error || userId == null) {
        return new NextResponse(null, { status: 401 });
    }

    const usdReceiveDiaries = await prisma.usdReceiveDiaries.findMany({
        where: {
            user_id: userId
        },
        include: {
            diary: true
        }
    });

    const diaries = await Promise.all(usdReceiveDiaries.map(async (data) => {
        const user = await supabaseAdmin.auth.admin.getUserById(data.diary.user_id);
        return { ...data.diary, user_name: user.data.user?.user_metadata.username }
    }))
    return NextResponse.json(diaries);
}