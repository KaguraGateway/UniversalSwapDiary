import History from "../components/diary/History"
import Header from "../components/layout/Header"
import Link from "next/link"
import KawaiiPage from "../components/layout/KawaiiPage"

const historyPage = () => {
    return (
        <KawaiiPage>
        <div>
            <Header />
                <h2>歴史ページ</h2>
            <History />
            <Link href="/home">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">homeへ</button>
            </Link>
        </div>
        </KawaiiPage>
    )
}

export default historyPage