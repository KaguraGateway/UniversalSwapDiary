import { Dispatch, SetStateAction } from "react"
import KawaiiRanking from "./KawaiiRanking";
import '../auth/auth.css'

type Props = {
    setInput1: Dispatch<SetStateAction<string>>;
    setInput2: Dispatch<SetStateAction<string>>;
    setInput3: Dispatch<SetStateAction<string>>;
    setInput4: Dispatch<SetStateAction<string>>;
}

const InputRanking = (props: Props) => {
    return(
        <>
            <KawaiiRanking color={""} isBorder={true}>
                <div className="flex justify-center items-center">
                    <input 
                        type="text"
                        className="text-black w-[100%] h-[100%] ranking-title "
                        placeholder="すきなタイトルをいれてね"
                        onChange={(e) => props.setInput1(e.target.value)}
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
                                    onChange={(e) => props.setInput2(e.target.value)}>
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
                                    onChange={(e) => props.setInput3(e.target.value)}>
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
                                    onChange={(e) => props.setInput4(e.target.value)}>
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