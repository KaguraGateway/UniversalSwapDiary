'use client'
import React from 'react';

type MyContextType = {
    badNews: string;
    setBadNews: React.Dispatch<React.SetStateAction<string>>;
    goodNews: string;
    setGoodNews: React.Dispatch<React.SetStateAction<string>>;
    loveTalk: string;
    setLoveTalk: React.Dispatch<React.SetStateAction<string>>;
    secretStory: string;
    setSecretStory: React.Dispatch<React.SetStateAction<string>>;
    diary: string;
    setDiary: React.Dispatch<React.SetStateAction<string>>;
    todayHappy: number;
    setTodayHappy: React.Dispatch<React.SetStateAction<number>>;
    rankingTopic: string;
    setRankingTopic: React.Dispatch<React.SetStateAction<string>>;
    ranking1: string;
    setRanking1: React.Dispatch<React.SetStateAction<string>>;
    ranking2: string;
    setRanking2: React.Dispatch<React.SetStateAction<string>>;
    ranking3: string;
    setRanking3: React.Dispatch<React.SetStateAction<string>>;
};

const MyContext = React.createContext<MyContextType | null>(null);

export default MyContext;
