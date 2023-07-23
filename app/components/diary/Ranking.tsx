'use client';

interface RankingProps {
    onTopicChange: (value: string) => void;
    onRank1Change: (value: string) => void;
    onRank2Change: (value: string) => void;
    onRank3Change: (value: string) => void;
};

const Ranking = ({ onTopicChange, onRank1Change, onRank2Change, onRank3Change }: RankingProps) => {
    return (
        <div className=''>
            <label htmlFor="topic">トピック</label>
            <input
                id="topic"
                type="text"
                className='text-black border-2'
                onChange={(e) => onTopicChange(e.target.value)}
            />
            <label htmlFor="rank1">1位:</label>
            <input
                id="rank1"
                type="text"
                className='text-black border-2'
                onChange={(e) => onRank1Change(e.target.value)}
            />
            <label htmlFor="rank2">2位:</label>
            <input
                id="rank2"
                type="text"
                className='text-black border-2'
                onChange={(e) => onRank2Change(e.target.value)}
            />
            <label htmlFor="rank3">3位:</label>
            <input
                id="rank3"
                type="text"
                className='text-black border-2'
                onChange={(e) => onRank3Change(e.target.value)}
            />
        </div>
    );
};

export default Ranking;
