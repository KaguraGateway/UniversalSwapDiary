'use client';
import React, { FC } from "react";
import Link from "next/link";
import { TodayTantou } from "./TodayTantou";
import { Diary } from "@/lib/diary";
import styles from "./DiaryCard.module.css";
import DisplayDate from "./DisplayDate";
import { DiaryUtility } from "@/lib/utils";

interface DiaryCardProps {
    diary: Diary;
}

const DiaryCard = ({ diary }: DiaryCardProps) => {
    const postedAt = new Date(diary.posted_at);
    return (
        <div className={`w-[375px] h-[150px] ${styles.shadow}`}>
            <Link href={`/diary/${diary.id}`}>
                <div className="relative inline-block">
                    <div className="w-[30px] h-[150px] bg-cover bg-[url('/CardHole.png')]"></div>
                    <div className="absolute w-[345px] h-[150px] top-0 left-[30px] bg-[#FEEFF1] flex flex-col justify-center">
                        <div className="flex justify-center py-4">
                            <DisplayDate bigText={(postedAt.getMonth() + 1).toString()} smallText="月"></DisplayDate>
                            <DisplayDate bigText={(postedAt.getDate()).toString()} smallText="日"></DisplayDate>
                            <div className="ml-3">
                                <DisplayDate bigText={DiaryUtility.getDayOfWeek(postedAt.toString())} smallText="曜日"></DisplayDate>
                            </div>
                        </div>
                        <TodayTantou name={diary.user_name || ""} />
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default DiaryCard;
