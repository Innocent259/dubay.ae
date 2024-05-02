import Link from "next/link"
import { IoMdNotificationsOutline, IoMdPerson } from "react-icons/io";

const Header: React.FC = () => {
    return (
        <header className="bg-[#910655] hidden md:flex justify-between items-center px-16 py-4 ">
            <Link href="/login" className="text-white">Login/ Sign Up</Link>
            <div className="flex gap-4 text-2xl text-white">
                <IoMdNotificationsOutline />
                <IoMdPerson />
            </div>
        </header>
    )
}

export default Header
