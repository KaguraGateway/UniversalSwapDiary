'use client';
import { Dispatch, SetStateAction } from "react";
import InputBox from "./InputBox";

interface SecretStoryProps {
    onValueChange: Dispatch<SetStateAction<string>>;
};

const SecretStory = ({ onValueChange }: SecretStoryProps) => {
    return (
        <div>
            <div className='pl-8 py-3'>
                <label htmlFor="dateInput" className='text-xl'>ひみつのおはなし</label>
            </div>
            <InputBox color="#ffffff" setInput={onValueChange} />
        </div>
    );
};

export default SecretStory;