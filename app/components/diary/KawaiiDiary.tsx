"use client"

import React from "react"
import { useState, useEffect } from "react";
import DisplayDate from "./DisplayDate";
import { DiaryUtility } from "@/app/DiaryUtility";

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

const LatestDiary = (props: Props) => {
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
                    <DisplayDate bigText={DiaryUtility.getDayOfWeek(props.date.getDay().toString())} smallText="曜日"></DisplayDate>
                </div>
            </div>
            <div className="flex justify-between">
                <div className="">きょうのたんとう</div>
                <div className="">{props.name}</div>
            </div>
            <div className="">
                <div className="">きょうのハッピー度</div>
                {/* {今日のはーっぴー度} */}
            </div>
        </div>
    )
}

export default LatestDiary