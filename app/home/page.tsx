import Link from "next/link"
import LatestDiary from "../components/diary/LatestDiary"
import Header from "../components/layout/Header"

const home = () => {
    return (
        <>
            <Header />
            <h2>Homeページ</h2>
            <LatestDiary />
            <Link href="/write">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">かく</button>
            </Link>
            <Link href="/history">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">みる</button>
            </Link>
        </>
    )
}

export default home