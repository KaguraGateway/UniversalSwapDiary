import KawaiiPage from '../components/layout/KawaiiPage'
import Image from 'next/image'
import { KawaiiTitle } from '@/ui/KawaiiTitle'
import { KawaiiButton } from '@/ui/KawaiiButton'
import Link from 'next/link'

const success = () => {
    return (
        <>
            <div className="flex items-center flex-col mt-[50px]">
                <Image src="/SuccessMark.png" width={133} height={102} alt='成功マーク'/>
                <div className="mt-[42px]">
                    <KawaiiTitle color={'#7A5648'} size={'3xl'}>こうかんしました</KawaiiTitle>
                </div>
                <div className="mt-[80px] flex items-center flex-col gap-y-5">
                    <Link href={"/memory"}><KawaiiButton color={'#E9C6A3'} border={true} className='border-[#E9C6A3] bg-[#FFE1C2] border-4'><KawaiiTitle size={'2xl'}>にっきをみる</KawaiiTitle></KawaiiButton></Link>
                    <Link href={"/home"}> <KawaiiButton color={'#7A5648'} border={true} className='border-4'>ホーム</KawaiiButton></Link>
                </div>
            </div>
        </>
    )
}

export default success