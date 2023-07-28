import { ReactNode } from "react";

type Props= {
    children: ReactNode
}

const DiaryText = (props: Props) => {
    return(
        <div className="text-stone-900 text-2xl font-bold">
            {props.children}
        </div>
    );
};
export default DiaryText;