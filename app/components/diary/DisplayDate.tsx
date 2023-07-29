import { KawaiiTitle } from "@/ui/KawaiiTitle";

type Props = {
    bigText: string;
    smallText: string;
}

const DisplayDate = (props: Props) => {
    return (
        <div className="flex items-end">
            <div className="w-[58px] rounded-[25px] text-[37px] bg-cyan-100 text-center">
                {props.bigText}
            </div>
            <div className="text-2xl flex text-end">
                <h2 className="text-center text-stone-900 text-4xl font-black tracking-tight">{props.smallText}</h2>
            </div>
        </div>
    );
};

export default DisplayDate;