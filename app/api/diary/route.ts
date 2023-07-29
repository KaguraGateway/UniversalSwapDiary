import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { getDiaryParams } from '@/lib/diary';

export async function POST(request: NextRequest) {
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

    const createdData = await prisma.usdDiaries.create({
        data: { ...diaryParams, user_id: userId }
    });

    // 交換
    const lastDiary = await prisma.usdDiaries.findFirst({
        where: {
            receive_user: null,
            NOT: {
                user_id: userId
            }
        },
        orderBy: {
            posted_at: "desc"
        }
    });
    if (lastDiary != null) {
        await prisma.usdReceiveDiaries.create({
            data: {
                diary_id: lastDiary.id,
                user_id: userId,
            }
        });
        await prisma.usdReceiveDiaries.create({
            data: {
                diary_id: createdData.id,
                user_id: lastDiary.user_id,
            }
        });
    }


    return NextResponse.json({ id: createdData.id });
}