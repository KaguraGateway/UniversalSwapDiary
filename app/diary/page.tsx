'use client'

import Header from "../components/layout/Header";
import { FC, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import KawaiiPage from "../components/layout/KawaiiPage";

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
        goodNews: "良いことしてしまいしましたわ!!",
        badNews: "悪いことしてしまいましたわ!!",
        loveTalk: "私は独身です",
        secretStory: "私はアルパカ",
        question: "あなたの好きなものは何?",
        diary: "雰囲気は言葉で発すると「ふいんき」ですが、実際は「ふんいき」のため前者を打ち込んでも漢字変換できないわけですが、2003年に2ちゃんねるに「ふいんき（←なぜか変換できない）」という書き込みがあり、「←なぜか変換できない」がネタとして使われるようになりました。様々なバリエーションがあり、例えば体育館(たいいくかん)を「たいくかん（←なぜか変換できない）」などがあります。",
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

    const getDayOfWeek = (date: string) => {
        const day = new Date(date).getDay();
        const days = ['日', '月', '火', '水', '木', '金', '土'];
        
        return days[day];
    };
    
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
        <KawaiiPage>
        <div className="flex flex-col justify-center min-h-screen py-12 bg-pink-100 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-3xl font-extrabold text-center text-purple-900">日記の詳細ページ</h2>
                {diary ? (
                    <div className="mt-8 bg-white rounded-lg shadow sm:overflow-hidden">
                    <div className="grid grid-cols-1 gap-6 px-4 py-5 sm:p-6">
                        <div className="bg-red-200 p-2 rounded-md">
                            {diary && new Date(diary.date).getMonth() + 1}月
                            {diary && new Date(diary.date).getDate()}日
                            {diary && getDayOfWeek(diary.date)}ようび
                        </div>
                        <div className="bg-blue-200 p-2 rounded-md">
                            <p className="font-medium">今日のハッピー度</p>
                            <p className="text-gray-700">{diary.todayHappy}</p>
                        </div>
                        <div className="bg-slate-200 p-2 rounded-md">
                            <p className="text-gray-700">{diary.diary}</p>
                        </div>
                        <div className="bg-orange-200 p-2 rounded-md">
                            <p className="font-medium">GoodNews</p>
                            <p className="text-gray-700">{diary.goodNews}</p>
                        </div>
                        <div className="bg-lime-200 p-2 rounded-md">
                            <p className="font-medium">BadNews</p>
                            <p className="text-gray-700">{diary.badNews}</p>
                        </div>
                        <div className="bg-purple-200 p-2 rounded-md">
                            <p className="font-medium">恋バナ</p>
                            <p className="text-gray-700">{diary.loveTalk}</p>
                        </div>
                        <div className="bg-emerald-200 p-2 rounded-md">
                            <p className="font-medium">ひみつのおはなし</p>
                            <p className="text-gray-700">{diary.secretStory}</p>
                        </div>
                        <div className="bg-cyan-200 p-2 rounded-md">
                            <p className="font-medium">質問</p>
                            <p className="text-gray-700">{diary.question}</p>
                        </div>
                        <div className="bg-indigo-200 p-2 rounded-md">
                            <p className="font-medium">{diary.ranking.topic}</p>
                            <ul className="list-disc pl-5 text-gray-700">
                                <li>{diary.ranking.rank1}</li>
                                <li>{diary.ranking.rank2}</li>
                                <li>{diary.ranking.rank3}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            ) : (
                <p className="mt-6 text-center text-gray-500">Loading...</p>
            )}
            </div>
        </div>
        </KawaiiPage>
    );
};

export default DiaryDetail;
