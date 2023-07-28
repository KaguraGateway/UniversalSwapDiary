import Link from 'next/link'
import Header from '../components/layout/Header'

const success = () => {
    return (
        <>
            <Header />
            <h2>Scuessページ</h2>
            <div className="success">
                <h1>Success</h1>
                <Link href="/home">
                    homeへ
                </Link>
            </div>
        </>
    )
}

export default success