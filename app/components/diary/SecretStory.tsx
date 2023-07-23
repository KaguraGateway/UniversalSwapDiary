'use client';

interface SecretStoryProps {
    onValueChange: (value: string) => void;
};

const SecretStory = ({ onValueChange }: SecretStoryProps) => {
    return (
        <div>
            <label htmlFor="SecretStory">SecretStory</label>
            <input
                id="SecretStory"
                type="text"
                className="text-black border-2"
                onChange={(e) => onValueChange(e.target.value)}
            />
        </div>
    );
};

export default SecretStory;