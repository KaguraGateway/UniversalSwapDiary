import Link from "next/link"
import LatestDiary from "../components/diary/LatestDiary"
import Header from "../components/layout/Header"

const home = () => {
    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center h-full">
                <LatestDiary />
                <div className="flex w-full fixed bottom-0 justify-center space-x-2 md:space-x-0 md:justify-end pb-4 md:pb-0 md:pr-4">
                    <Link href="/history">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 md:w-1/4 md:mr-2 px-4 rounded">みる</button>
                    </Link>
                    <Link href="/write">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 md:w-1/4 px-4 rounded">かく</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default home