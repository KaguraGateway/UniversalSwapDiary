import { prisma } from "@/app/lib/prisma";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { id: number } }) {
    const supabase = createRouteHandlerClient({ cookies });
    const { data } = await supabase.auth.getSession();
    const userId = data.session?.user.id;

    const foundData = await prisma.usdDiaries.findUnique({
        where: {
            id: params.id
        },
        include: {
            receive_user: true
        }
    });

    if (foundData == null || (foundData.user_id != userId && foundData.receive_user?.user_id != userId)) {
        return new NextResponse(null, { status: 404 });
    }
    // 送信前に消す
    foundData.receive_user = null;

    return NextResponse.json(foundData);
}