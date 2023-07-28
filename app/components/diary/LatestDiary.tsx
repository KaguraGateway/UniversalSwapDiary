"use client"

import React from "react"
import { useState, useEffect } from "react";

//apiに置き換えるやつ

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

const LatestDiary = () => {
    const [diaryEntry, setDiaryEntry] = useState<DiaryEntry | null>(null);

    const fetchRandomDiary = () => {
        const mockEntry = generateRandomDiaryEntry();
        setDiaryEntry(mockEntry);
    };

    useEffect(() => {
        fetchRandomDiary();
    }, []);

    return (
        <div className="border max-w-xs md:max-w-2xl overflow-x-auto mb-16 md:mb-0">
            {diaryEntry && (
                <div>
                    <p>今日の幸せ度: {diaryEntry.todayHappy}</p>
                    <p>今日の悪いニュース: {diaryEntry.badNews}</p>
                    <p>今日の良いニュース: {diaryEntry.goodNews}</p>
                    <p>今日の愛のことば: {diaryEntry.loveTalk}</p>
                    <p>今日の秘密の話: {diaryEntry.secretStory}</p>
                    <p>今日の質問: {diaryEntry.question}</p>
                    <p>今日の日記: {diaryEntry.diary}</p>
                    <p>今日のランキング: {diaryEntry.ranking.topic}</p>
                </div>
            )}
            <button onClick={fetchRandomDiary} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">更新</button>
        </div>
    )
}

export default LatestDiary