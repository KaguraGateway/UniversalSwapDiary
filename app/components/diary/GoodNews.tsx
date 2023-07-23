'use client';

interface GoodNewsProps {
    onValueChange: (value: string) => void;
};

const GoodNews = ({ onValueChange }: GoodNewsProps) => {
    return (
        <div>
            <label htmlFor="GoodNews">GoodNews</label>
            <input
                id="GoodNews"
                type="text"
                className="text-black border-2"
                onChange={(e) => onValueChange(e.target.value)}
            />
        </div>
    );
};

export default GoodNews;