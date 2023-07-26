'use client'

import { useState, useEffect, FC } from "react";
import DiaryCard from "./DiaryCard";

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

const History: FC = () => {
    const [diaries, setDiaries] = useState<Diary[]>([]);

    useEffect(() => {
        const mockDiaries: Diary[] = [
            { id: 1, date: '2023-07-01', badNews: '悪い1', goodNews: '良い1', loveTalk: '愛1', secretStory: '秘密1', question: '質問1', diary: '日記1', todayHappy: 10, ranking: { topic: 'ランキング1', rank1: 'a', rank2: 'b', rank3: 'c', } },
            { id: 2, date: '2023-07-02', badNews: '悪い2', goodNews: '良い2', loveTalk: '愛2', secretStory: '秘密2', question: '質問2', diary: '日記2', todayHappy: 20, ranking: { topic: 'ランキング2', rank1: 'a', rank2: 'b', rank3: 'c', } },
        ];
        console.log(mockDiaries); 
        setDiaries(mockDiaries); 
    }, []);

    return (
        <>
            {diaries.map(diary => (
                <DiaryCard key={diary.id} diary={diary} id={diary.id} />
            ))}
        </>
    )
}

export default History;
