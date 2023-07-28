"use client"

import LatestDiary from "../components/diary/LatestDiary"
import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"
import KawaiiPage from "../components/layout/KawaiiPage"
import DisplayDate from "../components/diary/DisplayDate"

const home = () => {
    return (
        <KawaiiPage>
            <Header />
            <div className="flex flex-col items-center justify-center h-full">
                <LatestDiary />
            </div>
            <Footer />
        </KawaiiPage>
    )
}

export default home