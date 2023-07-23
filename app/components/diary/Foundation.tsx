'use client';

import { Fragment } from "react";
import { useState } from "react";
import Preview from "../../preview/page";
import MyContext from "../MyContext/MYContext";
import BadNews from "./BadNews";
import GoodNews from "./GoodNews";
import LoveTalk from "./LoveTalk";
import SecretStory from "./SecretStory";
import Question from "./Question";
import Diary from "./Diary";
import TodayHappy from "./TodayHappy";
import Ranking from "./Ranking";

const Foundation = () => {  
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

    const handleSubmit = () => {
        if (!isFilled()) {
            alert("どうして全部入力してくれないの？");
            return;
        }

        const data = {
            badNews,
            goodNews,
            loveTalk,
            secretStory,
            question,
            diary,
            todayHappy,
            ranking
        };
        //ここにapiを叩く処理を書く

        console.log(data);
    }

    const handlePreview = () => {
        if (!isFilled()) {
            alert("全ての項目を埋めてください。");
            return;
        }
        setShowPreview(!showPreview);
    }

    const contextValue = {
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
    }

    return (
        <MyContext.Provider value={contextValue}>
            <div className="flex justify-center min-h-screen items-center">
                <div>
                    <h1 className="text-center text-4xl font-semibold py-4">交換日記</h1>
                    <div className="space-y-6">
                        <BadNews onValueChange={setBadNews} />
                        <GoodNews onValueChange={setGoodNews} />
                        <LoveTalk onValueChange={setLoveTalk} />
                        <SecretStory onValueChange={setSecretStory} />
                        <Question onValueChange={setQuestion} />
                        <Diary onValueChange={setDiary} />
                        <TodayHappy onValueChange={setTodayHappy} />
                        <Ranking 
                            onTopicChange={(value) => setRanking(prev => ({...prev, topic: value}))}
                            onRank1Change={(value) => setRanking(prev => ({...prev, rank1: value}))}
                            onRank2Change={(value) => setRanking(prev => ({...prev, rank2: value}))}
                            onRank3Change={(value) => setRanking(prev => ({...prev, rank3: value}))}
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
