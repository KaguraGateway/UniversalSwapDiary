import { ReactNode } from "react";

type Props= {
    children: ReactNode,
    color: string
}

const DiaryBorderText = (props: Props) => {
    return(
        <div className={`text-[${props.color}] text-2xl font-bold text-stroke-3`}>
            {props.children}
        </div>
    );
};
export default DiaryBorderText;