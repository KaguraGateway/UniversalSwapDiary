"use client"

import KawaiiDiary from "../components/diary/KawaiiDiary"
import InputBox from "../components/diary/InputBox"

const home = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <KawaiiDiary date={new Date(2023, 7, 21)} name="大石" />
            <InputBox color="#から始まるもの" setInput={() => { }/* 適当な関数 */}></InputBox>
        </div>
    )
}

export default home