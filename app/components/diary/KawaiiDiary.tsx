"use client"

import React from "react"
import { useState, useEffect } from "react";
import DisplayDate from "./DisplayDate";
import { DiaryUtility } from "@/lib/utils";
import ViewBox from "./ViewBox";
import DiaryText from "./DiaryText";

//apiに置き換えるやつ
type Props = {
    date: Date;
    name: string;
}

interface Ranking {
    topic: string;
    rank1: string;
    rank2: string;
    rank3: string;
}

interface DiaryEntry {
    badNews: string;
    goodNews: string;
    loveTalk: string;
    secretStory: string;
    question: string;
    diary: string;
    todayHappy: number;
    ranking: Ranking;
}

const generateRandomDiaryEntry = () => {
    const entries = [
        {
            badNews: "悪い1",
            goodNews: "良い1",
            loveTalk: "愛1",
            secretStory: "秘密1",
            question: "質問1",
            diary: "日記1",
            todayHappy: 10,
            ranking: {
                topic: "ランキング1",
                rank1: 'a',
                rank2: 'b',
                rank3: 'c',
            }
        },
        {
            badNews: "悪い2",
            goodNews: "良い2",
            loveTalk: "愛2",
            secretStory: "秘密2",
            question: "質問2",
            diary: "日記2",
            todayHappy: 20,
            ranking: {
                topic: "ランキング2",
                rank1: 'a',
                rank2: 'b',
                rank3: 'c',
            }
        },
    ];

    return entries[Math.floor(Math.random() * entries.length)];
};

const KawaiiDiary = (props: Props) => {
    const [diaryEntry, setDiaryEntry] = useState<DiaryEntry | null>(null);

    const fetchRandomDiary = () => {
        const mockEntry = generateRandomDiaryEntry();
        setDiaryEntry(mockEntry);
    };

    useEffect(() => {
        fetchRandomDiary();
    }, []);

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
                <DiaryText>{props.name}</DiaryText>
            </div>
            <div className="">
                <DiaryText>きょうのハッピー度</DiaryText>
                {/* {今日のはーっぴー度} */}
            </div>
            <div className="h-[100px] bg-[#FEEFF1]">
                aaa
            </div>
            <div>
                <DiaryText>GOOD NEWS</DiaryText>
                <ViewBox color="#FFE1C2">aa</ViewBox>
            </div>
            <div>
                <DiaryText>BAD NEWS</DiaryText>
                <ViewBox color="#D9EDFF">aa</ViewBox>
            </div>
            <div>
                <DiaryText>ひみつのおはなし</DiaryText>
                <ViewBox color="#DEDEDE">aa</ViewBox>
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