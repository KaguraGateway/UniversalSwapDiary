import Foundation from "../components/diary/Foundation";
import Header from "../components/layout/Header";

export const metadata = {
    title: "日記を書く"
}

const diaryPage = () => {
    return (
        <>
            <Header />
            <Foundation />
        </>
    )
}

export default diaryPage;