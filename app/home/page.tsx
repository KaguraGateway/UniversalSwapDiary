"use client"

import { useEffect, useState } from "react"
import HomeBottomButton from "../components/diary/HomeBottomButton"
import KawaiiDiary from "../components/diary/KawaiiDiary"
import FooterMenu from "../components/layout/FooterMenu"
import { Diary } from "@/lib/diary"

export default function Home() {
    const [diary, setDiary] = useState<Diary | null>(null);
    useEffect(() => {
        (async () => {
            const res = await fetch("/api/memories/latest");
            const data = await res.json();
            setDiary(data);
        })();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-full gap-y-20">
            {diary && <KawaiiDiary diary={diary} />}
            <FooterMenu />
        </div>
    )
}
