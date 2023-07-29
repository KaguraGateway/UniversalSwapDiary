'use client';
import { Dispatch, SetStateAction } from "react";
import InputBox from "./InputBox";

interface DiaryProps {
    onValueChange: Dispatch<SetStateAction<string>>;
};

const Diary = ({ onValueChange }: DiaryProps) => {
    return (
        <div>
            <div className='pl-8 py-3'>
                <label htmlFor="dateInput" className='text-xl'>にっき</label>
            </div>
            <InputBox color="#ffffff" setInput={onValueChange} />
        </div>
    );
};

export default Diary;