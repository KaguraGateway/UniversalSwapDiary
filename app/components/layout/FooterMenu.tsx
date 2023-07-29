import EveryoneButton from "../diary/EveryoneButton";
import WriteButton from "../diary/WriteButton";
import MyButton from "../diary/My";

const FooterMenu = () => {
    return(
        <footer className="flex fixed bottom-0 bg-[#FEEFF1] h-[75px] w-[100vw] justify-center">
            <div className="flex sticky items-end">
                <MyButton />
                <WriteButton />
                <EveryoneButton />
            </div>
        </footer>
    );
};

export default FooterMenu;