'use client';

interface LoveTalkProps {
    onValueChange: (value: string) => void;
};

const LoveTalk = ({ onValueChange }: LoveTalkProps) => {
    return (
        <div>
            <label htmlFor="LoveTalk">LoveTalk</label>
            <input
                id="LoveTalk"
                type="text"
                className="text-black border-2"
                onChange={(e) => onValueChange(e.target.value)}
            />
        </div>
    );
};

export default LoveTalk;