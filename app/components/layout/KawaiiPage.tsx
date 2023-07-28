import { ReactNode } from "react"
import '../auth/auth.css'

type Props = {
    children: ReactNode
}

const KawaiiPage = ({children}: Props) => {
    return(
        <>
            <div className="bg-custom">
                {children}
            </div>
        </>
    );
};

export default KawaiiPage;