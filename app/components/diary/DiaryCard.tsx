'use client';
import React, { FC } from "react";
import Link from "next/link";

interface Ranking {
    topic: string;
    rank1: string;
    rank2: string;
    rank3: string;
}

interface Diary {
    id: number;
    date: string;
    badNews: string;
    goodNews: string;
    loveTalk: string;
    secretStory: string;
    question: string;
    diary: string;
    todayHappy: number;
    ranking: Ranking;
}



interface DiaryCardProps {
    diary: Diary;
    id?: number;
}

const DiaryCard = ({ diary, id }: DiaryCardProps) => {
    return (
        <div>
            <Link href={`/diary?id=${id}`}>
                <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <p>{diary.date}</p>
                    <p>{diary.badNews}</p>
                    <p>{diary.goodNews}</p>
                </div>
            </Link>
        </div>
    );
};

export default DiaryCard;
