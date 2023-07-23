'use client';
import { useState } from 'react';

interface TodayHappyProps {
    onValueChange: (value: number) => void;
};

const TodayHappy = ({ onValueChange }: TodayHappyProps) => {
    const [happyValue, setHappyValue] = useState('0');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setHappyValue(newValue);
        onValueChange(Number(newValue));
    };

    return (
        <div>
            <label htmlFor="todayHappy">今日のハッピー度: {happyValue}</label>
            <input
                id="todayHappy"
                type="range"
                min="0"
                max="100"
                value={happyValue}
                onChange={handleChange}
            />
        </div>
    );
};

export default TodayHappy;
