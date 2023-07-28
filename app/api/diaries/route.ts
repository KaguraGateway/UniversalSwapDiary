import { prisma } from "@/lib/prisma";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const supabase = createRouteHandlerClient({ cookies });
    const { data, error } = await supabase.auth.getSession();
    const userId = data.session?.user.id;

    if (error || userId == null) {
        return new NextResponse(null, { status: 401 });
    }

    const foundData = await prisma.usdDiaries.findMany({
        where: {
            user_id: userId
        }
    });
    return NextResponse.json(foundData);
}