import { Diary } from "@/app/lib/diary";
import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_: NextRequest, { params }: { params: { id: number } }) {
    let usdReceiveDiaries = await prisma.usdReceiveDiaries.findMany({
        where: {
            user_id: ""
        },
        include: {
            diary: true
        }
    });

    let diaries: Diary[] = [];
    for(const [_, data] of usdReceiveDiaries.entries()) {
        const diary = data.diary;

        diaries.push({
            happy_percent: diary.happy_percent ?? 0,
            main_content: diary.main_content,
            good_news: diary.good_news ?? "",
            bad_news: diary.bad_news ?? "",
            secret_talk: diary.secret_talk ?? "",
            love_talk: diary.love_talk ?? "",
            best_title: diary.best_title ?? "",
            best_first: diary.best_first ?? "",
            best_second: diary.best_second ?? "",
            best_third: diary.best_third ?? "",
            user_name: "やまぐち",
            user_id: "userId",
            posted_at: diary.posted_at.toDateString()
        });
    }
    return NextResponse.json(diaries).ok;
}