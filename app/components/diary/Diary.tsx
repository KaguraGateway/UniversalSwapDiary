'use client';

interface DiaryProps {
    onValueChange: (value: string) => void;
};

const Diary = ({ onValueChange }: DiaryProps) => {
    return (
        <div>
            <label htmlFor="Diary">Diary</label>
            <input
                id="Diary"
                type="text"
                className="text-black"
                onChange={(e) => onValueChange(e.target.value)}
            />
        </div>
    );
};

export default Diary;
