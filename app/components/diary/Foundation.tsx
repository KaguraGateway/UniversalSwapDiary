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
    const [question, setQuestion] = useState('');
    const [diary, setDiary] = useState('');
    const [todayHappy, setTodayHappy] = useState(0);
    const [ranking, setRanking] = useState({
        topic: '',
        rank1: '',
        rank2: '',
        rank3: ''
    });

    const [showPreview, setShowPreview] = useState(false);

    const isFilled = () => {
        return (
            date !== '' &&
            badNews !== '' &&
            goodNews !== '' &&
            loveTalk !== '' &&
            secretStory !== '' &&
            question !== '' &&
            diary !== '' &&
            todayHappy !== 0 &&
            ranking.topic !== '' &&
            ranking.rank1 !== '' &&
            ranking.rank2 !== '' &&
            ranking.rank3 !== ''
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
                "best_title": ranking.topic,
                "best_first": ranking.rank1,
                "best_second": ranking.rank2,
                "best_third": ranking.rank3,
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
        question,
        setQuestion,
        diary,
        setDiary,
        todayHappy,
        setTodayHappy,
        ranking,
        setRanking
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
                            onTopicChange={(value) => setRanking(prev => ({ ...prev, topic: value }))}
                            onRank1Change={(value) => setRanking(prev => ({ ...prev, rank1: value }))}
                            onRank2Change={(value) => setRanking(prev => ({ ...prev, rank2: value }))}
                            onRank3Change={(value) => setRanking(prev => ({ ...prev, rank3: value }))}
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
