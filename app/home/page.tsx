"use client"

import LatestDiary from "../components/diary/LatestDiary"
import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"
import InputBox from "../components/diary/InputBox"
import { useState } from "react"
import KawaiiPage from "../components/layout/KawaiiPage"

const home = () => {
    const [a, setA] = useState("");
    return (
        <KawaiiPage>
            <Header />
            <InputBox color="" setInput={setA}/>
            <div className="flex flex-col items-center justify-center h-full">
                <LatestDiary />
            </div>
            <Footer />
        </KawaiiPage>
    )
}

export default home