'use client';

import { useState } from "react";
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

    const handleSubmit = () => {
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

    return (
        <div className="flex justify-center items-center text-center">
            <div>
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

                <button onClick={handleSubmit}>送信</button>
            </div>
        </div>
    )
}

export default Foundation;