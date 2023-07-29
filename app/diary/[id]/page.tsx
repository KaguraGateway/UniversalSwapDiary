'use client'

import Header from "../../components/layout/Header";
import { FC, useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import KawaiiPage from "../../components/layout/KawaiiPage";
import { DiaryUtility } from "../../../lib/utils";
import { Diary } from "@/lib/diary";
import KawaiiDiary from "@/app/components/diary/KawaiiDiary";

const DiaryDetail: FC = () => {
    const [diary, setDiary] = useState<Diary | null>(null);

    const params = useParams();
    const id = params.id;
    console.log('id:', id);

    useEffect(() => {
        if (id) {
            (async () => {
                const res = await fetch(`/api/diary/${id}`);
                const data = await res.json();
                setDiary(data);
            })();
        }
    }, [id]);

    return (
        <KawaiiPage>
            <div className="flex flex-col justify-center min-h-screen py-12 bg-pink-100 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="mt-6 text-3xl font-extrabold text-center text-purple-900">日記の詳細ページ</h2>
                    {diary ? <KawaiiDiary diary={diary} /> : (
                        <p className="mt-6 text-center text-gray-500">Loading...</p>
                    )}
                </div>
            </div>
        </KawaiiPage>
    );
};

export default DiaryDetail;
