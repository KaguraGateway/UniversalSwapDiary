import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/app/lib/prisma';

export async function GET(request: NextRequest) {
    let param = request.nextUrl.searchParams;
    //ここでPrisma.findUniqueかな？
    //TODO: パラメーターの仕様決まったら！
    let foundData = await prisma.usdDairies.findUnique( {
        where: {
            id: 11,
            user_id: "",
            posted_at: new Date()
        }
    });
    return NextResponse.json(foundData);
}
export async function POST(request: NextRequest) {
    let reqJson = request.nextUrl;
    //ここでPrisma.createかな？
    //TODO: パラメーターの仕様決まったら！
    let createdData = await prisma.usdDairies.create({
        data: {
            user_id: "id",
            posted_at: new Date(),
            main_content: "main content",
        }
    });
    return NextResponse.json(createdData);
}