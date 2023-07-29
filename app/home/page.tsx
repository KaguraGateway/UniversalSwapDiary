"use client"

import HomeBottomButton from "../components/diary/HomeBottomButton"
import KawaiiDiary from "../components/diary/KawaiiDiary"
import FooterMenu from "../components/layout/FooterMenu"

const home = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full gap-y-20">
            <KawaiiDiary date={new Date(2023, 7, 21)} name="大石" />
            <FooterMenu />
        </div>
    )
}

export default home