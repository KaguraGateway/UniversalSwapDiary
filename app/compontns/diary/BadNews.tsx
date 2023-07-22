'use client';

interface BadNewsProps {
    onValueChange: (value: string) => void;
};

const BadNews = ({ onValueChange }: BadNewsProps) => {
    return (
        <div>
            <label htmlFor="BadNews">BadNews</label>
            <input
                id="BadNews"
                type="text"
                className="text-black border-2"
                onChange={(e) => onValueChange(e.target.value)}
            />
        </div>
    );
};

export default BadNews;
