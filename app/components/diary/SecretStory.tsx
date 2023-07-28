'use client';
import { Dispatch, SetStateAction } from "react";
import InputBox from "./InputBox";

interface SecretStoryProps {
    onValueChange: Dispatch<SetStateAction<string>>;
};

const SecretStory = ({ onValueChange }: SecretStoryProps) => {
    return (
        <>
            <label htmlFor="SecretStory">SecretStory</label>
            <InputBox color="#ffffff" setInput={onValueChange} />
        </>
    );
};

export default SecretStory;