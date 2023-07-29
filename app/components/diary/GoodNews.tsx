'use client';
import { Dispatch, SetStateAction } from "react";
import InputBox from "./InputBox";

interface GoodNewsProps {
    onValueChange: Dispatch<SetStateAction<string>>;
};

const GoodNews = ({ onValueChange }: GoodNewsProps) => {
    return (
        <div>
            <div className='pl-8 py-3'>
                <label htmlFor="dateInput" className='text-xl'>GoodNews</label>
            </div>
            <InputBox color="#ffffff" setInput={onValueChange} />
        </div>
    );
};

export default GoodNews;