'use client';
import { Dispatch, SetStateAction } from "react";
import InputBox from "./InputBox";

interface QuestionProps {
    onValueChange: Dispatch<SetStateAction<string>>;
};

const Question = ({ onValueChange }: QuestionProps) => {
    return (
        <>
            <label htmlFor="Question">Question</label>
            <InputBox color="#ffffff" setInput={onValueChange} />
        </>
    );
};

export default Question;