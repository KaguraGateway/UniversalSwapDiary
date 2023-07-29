import { KawaiiTitle } from "@/ui/KawaiiTitle"

type Props = {
    name: string,
}
export const TodayTantou = (props: Props) => {
    return (
        <div className="flex justify-between">
            <KawaiiTitle size="2xl">きょうのたんとう</KawaiiTitle>
            <div className="relative w-[200px] h-[105px]">
                <div className="w-[110px] h-[57px] bg-[url('/star.svg')]"></div>
                <div className="absolute top-[8px] left-[16px]">
                    <KawaiiTitle size="3xl">{props.name}</KawaiiTitle>
                </div>
            </div>
        </div>

    )
}