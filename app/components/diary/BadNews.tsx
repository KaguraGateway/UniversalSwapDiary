'use client';
import { Dispatch, SetStateAction } from "react";
import InputBox from "./InputBox";

interface BadNewsProps {
    onValueChange: Dispatch<SetStateAction<string>>;
};

const BadNews = ({ onValueChange }: BadNewsProps) => {
    return (
        <div>
            <div className='pl-8 py-3'>
                <label htmlFor="dateInput" className='text-xl'>BadNews</label>
            </div>
            <InputBox color="#ffffff" setInput={onValueChange} />
        </div>
    );
};

export default BadNews;