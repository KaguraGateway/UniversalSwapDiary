'use client';

import { useRouter } from 'next/navigation'
import { useState } from "react";
import '.././auth/auth.css';
import Preview from "./Preview";
import DateInput from './Date';
import MyContext from "../MyContext/MYContext";
import BadNews from "./BadNews";
import GoodNews from "./GoodNews";
import LoveTalk from "./LoveTalk";
import SecretStory from "./SecretStory";
import Diary from "./Diary";
import TodayHappy from "./TodayHappy";
import Ranking from "./Ranking";

const Foundation = () => {
    const [date, setDate] = useState(new Date().toString());
    const [badNews, setBadNews] = useState('');
    const [goodNews, setGoodNews] = useState('');
    const [loveTalk, setLoveTalk] = useState('');
    const [secretStory, setSecretStory] = useState('');
    const [diary, setDiary] = useState('');
    const [todayHappy, setTodayHappy] = useState(0);
    const [rankingTopic, setRankingTopic] = useState("");
    const [ranking1, setRanking1] = useState("");
    const [ranking2, setRanking2] = useState("");
    const [ranking3, setRanking3] = useState("");

    const [showPreview, setShowPreview] = useState(false);

    const isFilled = () => {
        return (
            date !== '' &&
            badNews !== '' &&
            goodNews !== '' &&
            loveTalk !== '' &&
            secretStory !== '' &&
            diary !== '' &&
            todayHappy !== 0 &&
            rankingTopic !== '' &&
            ranking1 !== '' &&
            ranking2 !== '' &&
            ranking3 !== ''
        );
    }

    const router = useRouter();
    const handleSubmit = async () => {
        await fetch('/api/diary', {
            method: "POST",
            body: JSON.stringify({
                "happy_percent": todayHappy,
                "main_content": diary,
                "good_news": goodNews,
                "bad_news": badNews,
                "secret_talk": secretStory,
                "love_talk": loveTalk,
                "best_title": rankingTopic,
                "best_first": ranking1,
                "best_second": ranking2,
                "best_third": ranking3,
                "is_anonymous": false
            })
        });
        router.push('/success');
    }

    const handlePreview = () => {
        if (!isFilled()) {
            alert("全ての項目を埋めてください。");
            return;
        }
        setShowPreview(!showPreview);
    }

    const contextValue = {
        date,
        setDate,
        badNews,
        setBadNews,
        goodNews,
        setGoodNews,
        loveTalk,
        setLoveTalk,
        secretStory,
        setSecretStory,
        diary,
        setDiary,
        todayHappy,
        setTodayHappy,
        rankingTopic,
        setRankingTopic,
        ranking1,
        setRanking1,
        ranking2,
        setRanking2,
        ranking3,
        setRanking3
    };


    return (
        <MyContext.Provider value={contextValue}>
            <div className="flex bg-custom justify-center">
                <div>
                    <div className="space-y-5">
                        <DateInput onValueChange={setDate} />
                        <TodayHappy onValueChange={setTodayHappy} />
                        <Diary onValueChange={setDiary} />
                        <GoodNews onValueChange={setGoodNews} />
                        <BadNews onValueChange={setBadNews} />
                        <SecretStory onValueChange={setSecretStory} />
                        <LoveTalk onValueChange={setLoveTalk} />
                        <Ranking
                            onTopicChange={(value) => setRankingTopic(value)}
                            onRank1Change={(value) => setRanking1(value)}
                            onRank2Change={(value) => setRanking2(value)}
                            onRank3Change={(value) => setRanking3(value)}
                        />
                        <div className="flex justify-between">
                 
                            <button className="px-3 py-2 rounded" onClick={handlePreview}>プレビュー</button>
                            {isFilled() && <button className="px-3 py-2 rounded" onClick={handleSubmit}>交換する</button>}
                        </div>
                    </div>
                    {showPreview && <Preview />}
                </div>
            </div>
        </MyContext.Provider>
    );
}

export default Foundation;
