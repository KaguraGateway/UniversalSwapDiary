import { diaryWhiteParams, getDiaryParams } from "@/app/lib/diary";
import { prisma } from "@/app/lib/prisma";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
    const supabase = createRouteHandlerClient({ cookies });
    const { data } = await supabase.auth.getSession();
    const userId = data.session?.user.id;

    const draft = await prisma.usdDraftDiaries.findUnique({
        where: {
            user_id: userId
        }
    });
    if (draft == null) {
        return new NextResponse(null, { status: 204 });
    }

    return NextResponse.json(draft);
}

export async function PATCH(request: Request) {
    const supabase = createRouteHandlerClient({ cookies });
    const params = await request.json();
    const { data, error } = await supabase.auth.getSession();
    const userId = data.session?.user.id;

    if (error || userId == null) {
        return new NextResponse(null, { status: 401 });
    } else if (params.happy_percent > 100 || params.happy_percent < 0) {
        return new Response("Bad Request", { status: 400 })
    }
    const diaryParams = getDiaryParams(params);

    await prisma.usdDraftDiaries.upsert({
        where: {
            user_id: userId
        },
        update: diaryParams,
        create: { ...diaryParams, user_id: userId }
    });

    return new NextResponse(null, { status: 204 });
}