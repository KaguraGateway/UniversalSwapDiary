import { ReactNode } from "react";

type Props = {
    children: ReactNode
}

const KawaiiBorder = ({children}: Props) => {
    return(
        <div className="flex justify-center">
            <div className="border border-3 rounded-lg w-[95%]">
                {children}
            </div>
        </div>
    );
};
export default KawaiiBorder;