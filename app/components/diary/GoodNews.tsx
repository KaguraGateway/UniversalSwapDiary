'use client';
import { Dispatch, SetStateAction } from "react";
import InputBox from "./InputBox";

interface GoodNewsProps {
    onValueChange: Dispatch<SetStateAction<string>>;
};

const GoodNews = ({ onValueChange }: GoodNewsProps) => {
    return (
        <>
            <label htmlFor="GoodNews">GoodNews</label>
            <InputBox color="#ffffff" setInput={onValueChange} />
        </>
    );
};

export default GoodNews;