import Link from "next/link";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
    return (
        <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
            <div className=" flex gap-4 font-semibold">
                <MenuItem title="Home" address="/" Icon={AiFillHome} />
                <MenuItem title="About" address="/about" Icon={BsFillInfoCircleFill} />
            </div>
            <div className="flex items-center gap-4">
                <DarkModeSwitch />
                <Link href="/" className="flex items-center gap-1">
                    <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">IMDb</span>
                    <span className="hidden sm:inline text-xl font-semibold">Clone</span>
                </Link>
            </div>
        </div>
    )
}
