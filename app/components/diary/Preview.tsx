
import React, { useContext } from 'react';
import MyContext from '../MyContext/MYContext';

const Preview = () => {
    const context = useContext(MyContext);

    if (!context) {
        throw new Error("Preview must be used within a Provider");
    }

    const {
        badNews,
        goodNews,
        loveTalk,
        secretStory,
        question,
        diary,
        todayHappy,
        ranking,
    } = context;

    return (
        <div>
            <h2>Preview</h2>
            <p>Bad News: {badNews}</p>
            <p>Good News: {goodNews}</p>
            <p>Love Talk: {loveTalk}</p>
            <p>Secret Story: {secretStory}</p>
            <p>Question: {question}</p>
            <p>Diary: {diary}</p>
            <p>Today&apos;s Happiness: {todayHappy}</p>
            <p>Ranking:</p>
            <ul>
                <li>Topic: {ranking.topic}</li>
                <li>Rank 1: {ranking.rank1}</li>
                <li>Rank 2: {ranking.rank2}</li>
                <li>Rank 3: {ranking.rank3}</li>
            </ul>
        </div>
    );
}

export default Preview;
