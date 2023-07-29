import { KawaiiTitle } from "@/ui/KawaiiTitle";

type Props = {
    bigText: string;
    smallText: string;
}

const DisplayDate = (props: Props) => {
    return (
        <div className="flex items-end">
            <div className="w-[63px] rounded-3xl text-4xl bg-[#FEEFF1] text-center">
                {props.bigText}
            </div>
            <KawaiiTitle size="3xl" className="text-center text-[#24110A]">{props.smallText}</KawaiiTitle>
            <div className="text-2xl flex text-end">
                <h2 className="text-center text-[#24110A] text-4xl font-black tracking-tight"></h2>
            </div>
        </div>
    );
};

export default DisplayDate;