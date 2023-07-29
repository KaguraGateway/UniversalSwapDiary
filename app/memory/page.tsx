'use client';

import Header from "../components/layout/Header"
import Link from "next/link"
import KawaiiPage from "../components/layout/KawaiiPage"
import KawaiiBorder from "../components/layout/KawaiiBorder"
import { KawaiiTitle } from "@/ui/KawaiiTitle"
import { KawaiiSwitchButton } from "@/ui/KawaiiSwitchButton"
import { useEffect, useState } from "react";
import { Diary } from "@/lib/diary";
import { TodayTantou } from "../components/diary/TodayTantou";
import DiaryCard from "../components/diary/DiaryCard";

const OtherMemory = () => {
    const [memories, setMemories] = useState<Array<Diary>>([]);
    const memoriesDom: Array<React.ReactNode> = [];

    useEffect(() => {
        (async () => {
            const res = await fetch("/api/memories");
            const json = await res.json();
            setMemories(json);
        })();
    }, [])

    for (const memory of memories) {
        memoriesDom.push(
            <DiaryCard diary={memory} />
        )
    }

    return memoriesDom;
}
const MyMemory = () => {
    const [diaries, setDiaries] = useState<Array<Diary>>([]);
    const memoriesDom: Array<React.ReactNode> = [];

    useEffect(() => {
        (async () => {
            const res = await fetch("/api/diaries");
            const json = await res.json();
            setDiaries(json);
        })();
    }, [])

    for (const memory of diaries) {
        memoriesDom.push(
            <DiaryCard diary={memory} />
        )
    }

    return memoriesDom;
}

export default function MemoryPage() {
    const [activeIndex, setActiveIndex] = useState(0);
    const onChangeActive = (newIndex: number) => {
        setActiveIndex(newIndex);
    }
    return (
        <>
            <KawaiiTitle size="2xl">おもいで</KawaiiTitle>
            <div className="px-4 py-8">
                <KawaiiSwitchButton buttonBaseProps={{ type: "button" }} activeButtonIndex={activeIndex} onChangeActive={onChangeActive} buttons={[{ children: "みんな" }, { children: "じぶん" }]} />
            </div>
            {
                activeIndex === 0 ? <OtherMemory /> : <MyMemory />
            }
        </>
    )
}
