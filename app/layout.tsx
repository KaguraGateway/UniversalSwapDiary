import './globals.css'
import type { Metadata } from 'next'
import { Zen_Maru_Gothic } from 'next/font/google'

const zenMaru = Zen_Maru_Gothic({ weight: ["300", "400", "500", "700", "900"], display: "swap", preload: false })

export const metadata: Metadata = {
    title: '無差別交換日記',
    description: 'むさべつに日記がおくられてきます',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={zenMaru.className}>{children}</body>
        </html>
    )
}
