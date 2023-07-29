import Image from "next/image";

const MyButton = () => {
    return(
        <Image src={"/My.png"} alt={"aaa"} width={120} height={54} className="h-[54px] bottom-0"/>
    );
};

export default MyButton;