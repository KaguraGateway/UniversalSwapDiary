import Image from "next/image";
import Link from "next/link";

const MyButton = () => {
    return(
        <Link href={"/memory"}>
            <Image src={"/My.png"} alt={"aaa"} width={120} height={54} className="h-[54px] bottom-0"/>
        </Link>
    );
};

export default MyButton;