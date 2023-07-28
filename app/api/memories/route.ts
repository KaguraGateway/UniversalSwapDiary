import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_: NextRequest, { params }: { params: { id: number } }) {
    //ここでPrisma.findUniqueかな？
    //TODO: パラメーターの仕様決まったら！

    let usdReceiveDiaries = await prisma.usdReceiveDiaries.findMany({
        where: {
            user_id: ""
        }
    });

    for(const [_, data] of usdReceiveDiaries.entries()) {
        data.
    }
    return NextResponse.json(foundData).ok;
}