"use client"

import React from "react"
import { useState, useEffect } from "react";
import DisplayDate from "./DisplayDate";
import { DiaryUtility } from "@/lib/utils";
import ViewBox from "./ViewBox";
import { KawaiiTitle } from "@/ui/KawaiiTitle";
import KawaiiEssay from "./KawaiiEssay";
import { TodayTantou } from "./TodayTantou";

type Props = {
    date: Date,
    username: string,
    happy_percent: number,
    main_content: string,
    good_news: string,
    bad_news: string,
    secret_talk: string,
    love_talk: string,
    best_title: string,
    best_first: string,
    best_second: string,
    best_third: string,
}

export function KawaiiDiary(props: Props) {
    return (
        <div className="">
            <div className="flex justify-center">
                <DisplayDate bigText={props.date.getMonth().toString()} smallText="月"></DisplayDate>
                <DisplayDate bigText={props.date.getDate().toString()} smallText="日"></DisplayDate>
                <div className="ml-3">
                    <DisplayDate bigText={DiaryUtility.getDayOfWeek(props.date.toString())} smallText="曜日"></DisplayDate>
                </div>
            </div>
            <div className="flex justify-center m-4">
                <TodayTantou name={props.username}></TodayTantou>
            </div>
            <div className="">
                <KawaiiTitle size="xl">きょうのハッピー度</KawaiiTitle>
                {/* {今日のはーっぴー度} */}
            </div>
            <div>
                <KawaiiEssay main_content={props.main_content}></KawaiiEssay>
            </div>
            <div>
                <KawaiiTitle size="xl">GOOD NEWS</KawaiiTitle>
                <ViewBox color="#FFE1C2">{props.good_news}</ViewBox>
            </div>
            <div>
                <KawaiiTitle size="xl">BAD NEWS</KawaiiTitle>
                <ViewBox color="#D9EDFF">{props.bad_news}</ViewBox>
            </div>
            <div>
                <KawaiiTitle size="xl">ひみつのおはなし</KawaiiTitle>
                <ViewBox color="#DEDEDE">{props.secret_talk}</ViewBox>
            </div>
            <div>
                <KawaiiTitle size="xl">LOVE TALK</KawaiiTitle>
                <div className="bg-[url('/heart.svg')] bg-no-repeat bg-center w-[100%] h-[280px]">
                    <div className="text-center w-[100%] h-[100%] translate-y-[40%]">
                        {props.love_talk}
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