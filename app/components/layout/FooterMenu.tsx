import MemoryButton from "public/MemoryButton.svg"
import WriteButton from "public/WriteButton.svg"
import ViewDiaryButton from "public/ViewDiaryButton.svg"

const FooterMenu = () => {
    return(
        <footer className="flex justify-center sticky bottom-0">
            <MemoryButton />
            <WriteButton />
            <ViewDiaryButton />
        </footer>
    );
};

export default FooterMenu;