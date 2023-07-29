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

    const usdReceiveDiaries = await prisma.usdReceiveDiaries.findFirst({
        where: {
            user_id: userId
        },
        orderBy: {
            diary: {
                posted_at: 'desc'
            }
        },
        include: {
            diary: true
        }
    });
    if (usdReceiveDiaries == null) {
        return new NextResponse(null, { status: 404 });
    }

    const user = await supabaseAdmin.auth.admin.getUserById(usdReceiveDiaries?.diary.user_id);
    const diary = { ...usdReceiveDiaries.diary, user_name: user.data.user?.user_metadata.username };
    return NextResponse.json(diary);
}