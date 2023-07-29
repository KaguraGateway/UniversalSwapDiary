import { KawaiiButton } from "@/ui/KawaiiButton";
import Link from "next/link";
import { KawaiiTitle } from "@/ui/KawaiiTitle";

const HomeBottomButton = () => {
    return(
        <Link href={"/memory"} className="flex flex-col gap-y-8 items-center">
            <KawaiiButton border={true} className="border-[#6A5138] bg-[#E8C6A2] w-[291px]"><KawaiiTitle size={"lg"}>おもいでをみる</KawaiiTitle></KawaiiButton>
            <KawaiiButton border={true} className="border-[#F5F5F5] bg-[#FFB8C1] w-[252px]">ホームにもどる</KawaiiButton>
        </Link>
    );
};

export default HomeBottomButton;