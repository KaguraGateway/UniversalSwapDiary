import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import KawaiiBorder from './components/layout/KawaiiBorder'
import KawaiiPage from './components/layout/KawaiiPage'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: {
        default: '無差別交換日記',
        template: '%s | 無差別交換日記',
    },
    description: 'むさべつに日記がおくられてきます',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ja">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
            </head>
            <body className='font-zen'>
                <KawaiiPage>
                    <Header />
                    <KawaiiBorder>
                        {children}
                    </KawaiiBorder>
                    <Footer />
                </KawaiiPage>
            </body>
        </html>
    )
}
