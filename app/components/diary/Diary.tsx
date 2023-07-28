'use client';
import { Dispatch, SetStateAction } from "react";
import InputBox from "./InputBox";

interface DiaryProps {
    onValueChange: Dispatch<SetStateAction<string>>;
};

const Diary = ({ onValueChange }: DiaryProps) => {
    return (
        <>
            <label htmlFor="Diary">Diary</label>
            <InputBox color="#ffffff" setInput={onValueChange} />
        </>
    );
};

export default Diary;