import { ReactNode } from "react";

type Props= {
    children: ReactNode,
    color: string
}

const DiaryText = (props: Props) => {
    return(
        <div className={`text-[${props.color}] text-2xl font-bold`}>
            {props.children}
        </div>
    );
};
export default DiaryText;