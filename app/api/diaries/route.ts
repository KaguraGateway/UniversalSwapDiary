import { prisma } from "@/lib/prisma";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

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
    const resArr = await Promise.all(foundData.map(async (data) => {
        const user = await supabaseAdmin.auth.admin.getUserById(data.user_id);
        return { ...data, user_name: user.data.user?.user_metadata.username }
    }))
    return NextResponse.json(resArr);
}