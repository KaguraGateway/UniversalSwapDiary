import Image from "next/image";
import Link from "next/link";

const EveryoneButton = () => {
    return(
        <Link href={"/memory"}>
            <Image src={"/Everyone.png"} alt={"aaa"} width={120} height={64} className="h-[64px]"/>
        </Link>
    );
};

export default EveryoneButton;