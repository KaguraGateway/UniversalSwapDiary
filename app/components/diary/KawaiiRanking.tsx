import { ReactNode } from "react";

type Props = {
    //TODO: Colorの実装
    color: string,
    isBorder: boolean,
    children: ReactNode
}

const KawaiiRanking = (props : Props) => {
    let borderTailwind = "";
    if(props.isBorder) {
        borderTailwind = `border border-[${props.color}]`;
    }
    else{
        borderTailwind = `border-b-[3px] border-r-[3px] border-[${props.color}]`
    }

    return(
        <div>
            <div>
                <div className="ml-2">{props.children}</div>
            </div>
        </div>
    );
}

export default KawaiiRanking;