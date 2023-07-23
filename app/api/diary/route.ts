import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/app/lib/prisma';

export async function POST(request: NextRequest) {
    const res = await request.json();
    //ここでPrisma.createかな？
    //TODO: パラメーターの仕様決まったら！
    let createdData = await prisma.usdDairies.create({
        data: {
            posted_at: new Date(),
            today_happy_percent: res.happy_percent,
            main_content: res.main_content,
            good_news: res.good_news,
            bad_news: res.bad_news,
            secret_talk: res.secret_talk,
            love_talk: res.love_talk,
            is_anonymous: res.is_anonymous
        }
    });
    return NextResponse.json(createdData.id).ok;
}