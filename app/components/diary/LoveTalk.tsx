'use client';
import { Dispatch, SetStateAction } from "react";
import InputBox from "./InputBox";

interface LoveTalkProps {
    onValueChange: Dispatch<SetStateAction<string>>;
};

const LoveTalk = ({ onValueChange }: LoveTalkProps) => {
    return (
        <>
            <label htmlFor="LoveTalk">LoveTalk</label>
            <InputBox color="#ffffff" setInput={onValueChange} />
        </>
    );
};

export default LoveTalk;