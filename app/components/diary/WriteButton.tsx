import Image from "next/image";
import Link from "next/link";

const WriteButton = () => {
    return(
        <Link href={"/write"}>
            <Image src={"/WriteButton.png"} alt={"aaa"} width={120} height={119} className="h-[119px]"/>
        </Link>
    );
};

export default WriteButton;