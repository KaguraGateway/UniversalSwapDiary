import { ReactNode } from "react";
import KawaiiBox from "./KawaiiBox";

type Props = {
    children: ReactNode
}
const ViewBox = (props: Props) => {
    return(
        <>
            <KawaiiBox color="aaa" isBorder={false}>{props.children}</KawaiiBox>
        </>
    );
};

export default ViewBox;