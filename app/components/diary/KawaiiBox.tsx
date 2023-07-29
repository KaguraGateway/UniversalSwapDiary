import { ReactNode } from "react";
import DisplayDate from "./DisplayDate";

type Props = {
    //TODO: Colorの実装
    color: string,
    isBorder: boolean,
    children: ReactNode
}

const KawaiiBox = (props : Props) => {
    let borderTailwind = "";
    if(props.isBorder) {
        borderTailwind = `border border-[${props.color}]`;
    }
    else{
        borderTailwind = `border-b-[3px] border-r-[3px] border-[${props.color}]`
    }

    return(
        <div className={`rounded-3xl h-[100px] ${borderTailwind} flex justify-center items-center bg-[#FAFAFA] w-full`}>
            <div className={`border border-[2.5px] border-dashed w-[calc(100%_-_16px)] h-[calc(100%_-_16px)] rounded-3xl border-[${props.color}] `}>
                <div className="ml-2">{props.children}</div>
            </div>
        </div>
    );
}

export default KawaiiBox;