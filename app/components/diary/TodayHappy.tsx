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
            <div className='pl-8 py-3'>
                <label htmlFor="todayHappy" className='text-xl'>きょうのハッピー度: {happyValue}%</label>
            </div>
            <div>
                <input
                    id="todayHappy"
                    type="range"
                    className='happyborder flex w-11/12 mx-auto'
                    min="0"
                    max="100"
                    value={happyValue}
                    onChange={handleChange}
                    style={{
                        background: `linear-gradient(to right, #CCC 0%, #CCC ${
                            happyValue
                        }%, #fff ${happyValue}%, white 100%)`
                    }}
                />
            </div>
        </div>
    );
};

export default TodayHappy;
