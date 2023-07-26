'use client'

import Header from "../components/layout/Header";
import { FC, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

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

const mockDiaries: Diary[] = [
    {
        id: 1,
        date: "2023-07-01",
        badNews: "悪い1",
        goodNews: "良い1",
        loveTalk: "愛1",
        secretStory: "秘密1",
        question: "質問1",
        diary: "日記1",
        todayHappy: 10,
        ranking: { topic: "ランキング1", rank1: "a", rank2: "b", rank3: "c" },
    },
    {
        id: 2,
        date: "2023-07-02",
        badNews: "悪い2",
        goodNews: "良い2",
        loveTalk: "愛2",
        secretStory: "秘密2",
        question: "質問2",
        diary: "日記2",
        todayHappy: 20,
        ranking: { topic: "ランキング2", rank1: "a", rank2: "b", rank3: "c" },
    },
];

const DiaryDetail: FC = () => {
    const [diary, setDiary] = useState<Diary | null>(null);
    
    const searchParms = useSearchParams();

    const id = searchParms.get('id');
    console.log('id:', id);
    
    useEffect(() => {
        if (id) {
            console.log('id:', id);
            const selectedDiary = mockDiaries.find((diary) => diary.id === Number(id));
            console.log('selectedDiary:', selectedDiary);
            if (selectedDiary) {
                setDiary(selectedDiary);
            }
        }
    }, [id]);

    return (
        <>
        <Header />
        <h2>日記の詳細ページ</h2>
        {diary ? (
            <div>
            <h1>{diary.date}</h1>
            <p>{diary.badNews}</p>
            <p>{diary.goodNews}</p>
            <p>{diary.loveTalk}</p>
            <p>{diary.secretStory}</p>
            <p>{diary.question}</p>
            <p>{diary.diary}</p>
            <p>{diary.todayHappy}</p>
            <p>{diary.ranking.topic}</p>
            <p>{diary.ranking.rank1}</p>
            <p>{diary.ranking.rank2}</p>
            <p>{diary.ranking.rank3}</p>
            </div>
        ) : (
            <p>Loading...</p>
        )}
        </>
    );
};

export default DiaryDetail;
