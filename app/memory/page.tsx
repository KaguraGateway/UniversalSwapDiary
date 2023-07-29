import History from "../components/diary/History"
import Header from "../components/layout/Header"
import Link from "next/link"
import KawaiiPage from "../components/layout/KawaiiPage"
import KawaiiBorder from "../components/layout/KawaiiBorder"
import { KawaiiTitle } from "@/ui/KawaiiTitle"
import { KawaiiSwitchButton } from "@/ui/KawaiiSwitchButton"

export default async function MemoryPage() {
    const onChangeActive = (newIndex: number) => {
        console.log(newIndex);
    }
    return (
        <>
            <KawaiiTitle size="2xl">おもいで</KawaiiTitle>
            <KawaiiSwitchButton buttonBaseProps={{ type: "button" }} activeButtonIndex={0} onChangeActive={onChangeActive} buttons={[{ children: "みんな" }, { children: "じぶん" }]} />
        </>
    )
}
