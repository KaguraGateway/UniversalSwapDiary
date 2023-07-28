'use client';
import { Dispatch, SetStateAction } from "react";
import InputBox from "./InputBox";

interface BadNewsProps {
    onValueChange: Dispatch<SetStateAction<string>>;
};

const BadNews = ({ onValueChange }: BadNewsProps) => {
    return (
        <>
            <label htmlFor="BadNews">BadNews</label>
            <InputBox color="#ffffff" setInput={onValueChange} />
        </>
    );
};

export default BadNews;