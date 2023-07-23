'use client';

interface QuestionProps {
    onValueChange: (value: string) => void;
};

const Question = ({ onValueChange }: QuestionProps) => {
    return (
        <div>
            <label htmlFor="Question">Question</label>
            <input
                id="Question"
                type="text"
                className="text-black border-2"
                onChange={(e) => onValueChange(e.target.value)}
            />
        </div>
    );
};

export default Question;