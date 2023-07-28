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
        borderTailwind = `border-[${props.color}]`;
    }

    return(
        <div className={`rounded-lg h-[100px] border-4 ${borderTailwind} flex justify-center items-center`}>
            <div className="border-3 border-dashed border w-[calc(100%_-_16px)] h-[calc(100%_-_16px)] rounded-lg">
                {props.children}
            </div>
        </div>
    );
}

export default KawaiiBox;