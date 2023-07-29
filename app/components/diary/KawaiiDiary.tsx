"use client"

import React from "react"
import { useState, useEffect } from "react";
import DisplayDate from "./DisplayDate";
import { DiaryUtility } from "@/lib/utils";
import ViewBox from "./ViewBox";
import { KawaiiTitle } from "@/ui/KawaiiTitle";
import KawaiiEssay from "./KawaiiEssay";
import { Diary } from "@/lib/diary";
import { TodayTantou } from "./TodayTantou";

type Props = {
    diary: Diary
}

export function KawaiiDiary(props: Props) {
    const postedAt = new Date(props.diary.posted_at);
    return (
        <div className="">
            <div className="flex justify-center">
                <DisplayDate bigText={(postedAt.getMonth() + 1).toString()} smallText="月"></DisplayDate>
                <DisplayDate bigText={postedAt.getDate().toString()} smallText="日"></DisplayDate>
                <div className="ml-3">
                    <DisplayDate bigText={DiaryUtility.getDayOfWeek(postedAt.toString())} smallText="曜日"></DisplayDate>
                </div>
            </div>
            <TodayTantou name={props.diary.user_name || ""} />
            <div className="">
                <KawaiiTitle size="xl">きょうのハッピー度</KawaiiTitle>
                {/* {今日のはーっぴー度} */}
            </div>
            <div>
                <KawaiiEssay main_content={props.diary.main_content}></KawaiiEssay>
            </div>
            <div>
                <KawaiiTitle size="xl">GOOD NEWS</KawaiiTitle>
                <ViewBox color="#FFE1C2">{props.diary.good_news}</ViewBox>
            </div>
            <div>
                <KawaiiTitle size="xl">BAD NEWS</KawaiiTitle>
                <ViewBox color="#D9EDFF">{props.diary.bad_news}</ViewBox>
            </div>
            <div>
                <KawaiiTitle size="xl">ひみつのおはなし</KawaiiTitle>
                <ViewBox color="#DEDEDE">{props.diary.secret_talk}</ViewBox>
            </div>
            <div>
                <KawaiiTitle size="xl">LOVE TALK</KawaiiTitle>
                <div className="bg-[url('/heart.svg')] bg-no-repeat bg-center w-[100%] h-[280px]">
                    <div className="text-center w-[100%] h-[100%] translate-y-[40%]">
                        {props.diary.love_talk}
                    </div>
                </div>

                <></>
            </div>
            <div>
                <KawaiiTitle size="xl">なんでもBEST3</KawaiiTitle>
            </div>

        </div>
    )
}

export default KawaiiDiary