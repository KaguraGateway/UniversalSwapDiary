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
    question: string;
    setQuestion: React.Dispatch<React.SetStateAction<string>>;
    diary: string;
    setDiary: React.Dispatch<React.SetStateAction<string>>;
    todayHappy: number;
    setTodayHappy: React.Dispatch<React.SetStateAction<number>>;
    ranking: {
        topic: string;
        rank1: string;
        rank2: string;
        rank3: string;
    };
    setRanking: React.Dispatch<React.SetStateAction<{
        topic: string;
        rank1: string;
        rank2: string;
        rank3: string;
    }>>;
};

const MyContext = React.createContext<MyContextType | null>(null);

export default MyContext;
