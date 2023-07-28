"use client"

import React from "react"
import { useState, useEffect } from "react";
import DisplayDate from "./DisplayDate";
import { DiaryUtility } from "@/lib/utils";
import ViewBox from "./ViewBox";
import DiaryText from "./DiaryText";

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
            <div className="flex">
                <DisplayDate bigText={props.date.getMonth().toString()} smallText="月"></DisplayDate>
                <DisplayDate bigText={props.date.getDate().toString()} smallText="日"></DisplayDate>
                <div className="ml-3">
                    <DisplayDate bigText={DiaryUtility.getDayOfWeek(props.date.toString())} smallText="曜日"></DisplayDate>
                </div>
            </div>
            <div className="flex justify-between">
                <DiaryText>きょうのたんとう</DiaryText>
                <DiaryText>{props.username}</DiaryText>
            </div>
            <div className="">
                <DiaryText>きょうのハッピー度</DiaryText>
                {/* {今日のはーっぴー度} */}
            </div>
            <div className="h-[100px] bg-[#FEEFF1]">
                {props.main_content}
            </div>
            <div>
                <DiaryText>GOOD NEWS</DiaryText>
                <ViewBox color="#FFE1C2">{props.good_news}</ViewBox>
            </div>
            <div>
                <DiaryText>BAD NEWS</DiaryText>
                <ViewBox color="#D9EDFF">{props.bad_news}</ViewBox>
            </div>
            <div>
                <DiaryText>ひみつのおはなし</DiaryText>
                <ViewBox color="#DEDEDE">{props.secret_talk}</ViewBox>
            </div>
            <div>
                <DiaryText>LOVE TALK</DiaryText>
                <></>
            </div>
            <div>
                <DiaryText>なんでもBEST3</DiaryText>

            </div>

        </div>
    )
}

export default KawaiiDiary