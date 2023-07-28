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
        borderTailwind = `border-b-2 border-r-2 border-[${props.color}]`
    }

    return(
        <div className={`rounded-lg h-[100px] ${borderTailwind} flex justify-center items-center bg-[#FAFAFA] w-full`}>
            <div className={`border border-3 border-dashed w-[calc(100%_-_16px)] h-[calc(100%_-_16px)] rounded-lg border-[${props.color}] `}>
                <div className="ml-2">{props.children}</div>
            </div>
        </div>
    );
}

export default KawaiiBox;