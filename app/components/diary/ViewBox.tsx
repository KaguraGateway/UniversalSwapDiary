import { ReactNode } from "react";
import KawaiiBox from "./KawaiiBox";

type Props = {
    color: string;
    children: ReactNode;
}
const ViewBox = (props: Props) => {
    return(
        <>
            <KawaiiBox color={props.color} isBorder={false}>{props.children}</KawaiiBox>
        </>
    );
};

export default ViewBox;