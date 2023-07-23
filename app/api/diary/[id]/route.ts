import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_: NextRequest, { params }: {params: { id: number }}) {
    //ここでPrisma.findUniqueかな？
    //TODO: パラメーターの仕様決まったら！
    let foundData = await prisma.usdDairies.findUnique( {
        where: {
            id: params.id
        }
    });
    return NextResponse.json(foundData).ok;
}