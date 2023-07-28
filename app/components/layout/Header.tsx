import Link from "next/link";

const Header = () => {
    return (
        <header className="flex justify-between items-center py-4 px-8 bg-white">
        <Link href="/home">
            <p className="text-2xl font-bold text-gray-800">
            Logo
            </p>
        </Link>
        <Link href="/auth/login">
            <p className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Login
            </p>
        </Link>
        </header>
    );
};

export default Header;
