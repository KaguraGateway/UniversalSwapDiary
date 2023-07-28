import Link from "next/link"
import LatestDiary from "../components/diary/LatestDiary"
import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"

const home = () => {
    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center h-full">
                <LatestDiary />
            </div>
            <Footer />
        </>
    )
}

export default home