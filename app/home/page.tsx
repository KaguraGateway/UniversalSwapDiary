"use client"

import LatestDiary from "../components/diary/KawaiiDiary"
import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"
import KawaiiPage from "../components/layout/KawaiiPage"
import KawaiiBorder from "../components/layout/KawaiiBorder"
import ViewBox from "../components/diary/ViewBox"

const home = () => {
    return (
        <KawaiiPage>
            <Header />
            <KawaiiBorder>
                <div className="flex flex-col items-center justify-center h-full">
                    <LatestDiary date={new Date(2023, 7, 21)} name="大石"/>
                </div>
            </KawaiiBorder>
            <Footer />
        </KawaiiPage>
    )
}

export default home