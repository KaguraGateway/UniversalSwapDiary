'use client';
import { Dispatch, SetStateAction } from "react";
import InputBox from "./InputBox";

interface LoveTalkProps {
    onValueChange: Dispatch<SetStateAction<string>>;
};

const LoveTalk = ({ onValueChange }: LoveTalkProps) => {
    return (
        <div>
            <div className='pl-8 py-3'>
                <label htmlFor="dateInput" className='text-xl'>LOVE TALK</label>
            </div>
            <InputBox color="#ffffff" setInput={onValueChange} />
        </div>
    );
};

export default LoveTalk;