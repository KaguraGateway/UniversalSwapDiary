'use client';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';
import Link from 'next/link';

const Header = () => {
    const pathname = usePathname();
    const isLogoDisplay = !pathname?.startsWith('/auth');

    return (
        <header>
            <div className={`bg-[url('/lace.svg')] bg-no-repeat h-[76px] flex justify-center ${styles.header}`} style={{ height: isLogoDisplay ? "92px" : "" }}>
                {
                    isLogoDisplay && <Link href="/home"><Image src="/logo.svg" alt="logo" width={160} height={47} className="h-[47px] mt-1" /></Link>
                }
            </div>
        </header>
    );
};

export default Header;
