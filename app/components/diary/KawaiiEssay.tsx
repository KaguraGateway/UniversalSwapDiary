import { ReactNode } from "react";
import DisplayDate from "./DisplayDate";
import Image from 'next/image';

type Props = {
    //TODO: Colorの実装
    main_content: ReactNode
}

const KawaiiEssay = (props : Props) => {
    return(
        <>
            <div className='flex justify-center items-center'>
                    <Image src="/EssayLace.svg" alt="" width={375} height={20} />
            </div>
            <div className="h-[100px] bg-[#FEEFF1]">
                    {props.main_content}
            </div>
            <div className='flex justify-center items-center'>
                    <Image src="/EssayLace_invert.svg" alt="" width={375} height={20} />
            </div>
        </>
    );
}

export default KawaiiEssay;