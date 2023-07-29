import { Dispatch, SetStateAction } from "react"
import KawaiiRanking from "./KawaiiRanking";
import '../auth/auth.css'

type Props = {
    color: string;
    setInput: Dispatch<SetStateAction<string>>;
}

const InputRanking = (props: Props) => {
    function valueChange(value: string) {
        props.setInput(value);
    }
    return(
        <>
            <KawaiiRanking color={props.color} isBorder={true}>
                <div className="flex justify-center items-center">
                    <input 
                        type="text"
                        className="text-black w-[100%] h-[100%] ranking-title "
                        placeholder="すきなタイトルをいれてね"
                        onChange="props.setInput(e.target.value)}"
                    >
                    </input>
                </div>
                <div>
                    <div className="pt-2">
                        <div className="flex w-full h-16 ranking-1">
                            <div className="justify-center items-center flex">
                                <img src="/rank1.svg" alt="" />
                            </div>
                            <div className="w-[calc(100%_-_16px)]">
                                <input 
                                    type="text"
                                    className="text-black h-[100%] rankingcontent-1"
                                    onChange={(e) => valueChange(e.target.value)}>
                                </input>
                            </div>
                        </div>
                    </div> 
                    <div className="pt-2">
                        <div className="flex w-full h-16 ranking-2">
                            <div className="justify-center items-center flex">
                                <img src="/rank2.svg" alt="" />
                            </div>
                            <div className="w-[calc(100%_-_16px)]">
                                <input 
                                    type="text"
                                    className="text-black h-[100%] rankingcontent-1"
                                    onChange={(e) => valueChange(e.target.value)}>
                                </input>
                            </div>
                        </div>
                    </div>
                    <div className="pt-2">
                        <div className="flex w-full h-16 ranking-3">
                            <div className="justify-center items-center flex">
                                <img src="/rank3.svg" alt="" />
                            </div>
                            <div className="w-[calc(100%_-_16px)]">
                                <input 
                                    type="text"
                                    className="text-black h-[100%] rankingcontent-1"
                                    onChange={(e) => valueChange(e.target.value)}>
                                </input>
                            </div>
                        </div>
                    </div>
                </div>
            </KawaiiRanking>
        </>
    );
};

export default InputRanking;