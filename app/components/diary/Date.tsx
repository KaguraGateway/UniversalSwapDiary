import React, { useState } from 'react';
import '../../components/auth/auth.css'

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
        <div className='pt-3'>
            <div className='pl-8 py-3'>
                <label htmlFor="dateInput" className='text-xl'>ひづけ</label>
            </div>
            <div className=' flex justify-center'>
                <div className="h-14 dateborder">
                    <div className="h-12 dateborder2 items-center pl-4 flex">
                        <input 
                            id='dateInput' 
                            type='date'
                            value={date}
                            onChange={handleChange}
                            placeholder='例: 2023-07-22'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DateInput;
