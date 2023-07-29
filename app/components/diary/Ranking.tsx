'use client';
import InputRanking from "./InputRanking";

type Props = {
    onTopicChange: (value: string) => void;
    onRank1Change: (value: string) => void;
    onRank2Change: (value: string) => void;
    onRank3Change: (value: string) => void;
}

const Ranking = (props: Props) => {
    return (
        <div>
            <div className='pl-8 py-3'>
                <label htmlFor="dateInput" className='text-xl'>なんでもBEST3</label>
            </div>
            <InputRanking />
        </div>
    );
};

export default Ranking;
