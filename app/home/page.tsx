"use client"

import LatestDiary from "../components/diary/LatestDiary"
import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"
import KawaiiPage from "../components/layout/KawaiiPage"
import KawaiiBorder from "../components/layout/KawaiiBorder"

const home = () => {
    return (
        <KawaiiPage>
            <Header />
            <KawaiiBorder>
                <div className="flex flex-col items-center justify-center h-full">
                    aaaaaaaaaaaaaaaa
                    {/* <LatestDiary /> */}
                </div>
            </KawaiiBorder>
            <Footer />
        </KawaiiPage>
    )
}

export default home