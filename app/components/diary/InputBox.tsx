import { Dispatch, SetStateAction, useState } from "react";
import KawaiiBox from "./KawaiiBox";

type Props = {
    color: string;
    setInput: Dispatch<SetStateAction<string>>;
}

const InputBox = (props: Props) => {
    function valueChange(value: string) {
        props.setInput(value);
    }
    return(
        <>
            <KawaiiBox color={props.color} isBorder={true}>
                <input                 
                    type="text"
                    className="text-black w-[100%] h-[100%] "
                    onChange={(e) => valueChange(e.target.value)}
                    >
                </input>
            </KawaiiBox>
        </>
    );
};

export default InputBox;