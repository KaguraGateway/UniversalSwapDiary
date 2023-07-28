"use client"

import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"
import KawaiiPage from "../components/layout/KawaiiPage"
import KawaiiBorder from "../components/layout/KawaiiBorder"
import KawaiiDiary from "../components/diary/KawaiiDiary"

const home = () => {
    return (
        <KawaiiPage>
            <Header />
            <KawaiiBorder>
                <div className="flex flex-col items-center justify-center h-full">
                    <KawaiiDiary date={new Date(2023, 7, 21)} name="大石"/>                </div>
            </KawaiiBorder>
            <Footer />
        </KawaiiPage>
    )
}

export default home