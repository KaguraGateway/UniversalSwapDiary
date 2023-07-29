'use client';
import { Dispatch, SetStateAction } from "react";
import InputRanking from "./InputRanking";

type Props = {
    onTopicChange: Dispatch<SetStateAction<string>>;
    onRank1Change: Dispatch<SetStateAction<string>>;
    onRank2Change: Dispatch<SetStateAction<string>>;
    onRank3Change: Dispatch<SetStateAction<string>>;
}

const Ranking = (props: Props) => {
    return (
        <div>
            <div className='pl-8 py-3'>
                <label htmlFor="dateInput" className='text-xl'>なんでもBEST3</label>
            </div>
            <InputRanking setInput1={props.onTopicChange} setInput2={props.onRank1Change} setInput3={props.onRank2Change} setInput4={props.onRank3Change}/>
        </div>
    );
};

export default Ranking;
