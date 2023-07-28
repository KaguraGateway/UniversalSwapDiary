import React, { useState } from 'react';

interface DateInputProps {
    onValueChange: (value: string) => void;
}

const DateInput: React.FC<DateInputProps> = ({ onValueChange }) => {
    const [date, setDate] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDate(event.target.value);
        onValueChange(event.target.value);
    };

    return (
        <div className="">
            <div className="">
                <label htmlFor='dateInput'>日付 (YYYY-MM-DD):</label>
                <input 
                    id='dateInput' 
                    type='date'
                    value={date}
                    onChange={handleChange}
                    placeholder='例: 2023-07-22'
                />
            </div>
        </div>
    );
};

export default DateInput;
