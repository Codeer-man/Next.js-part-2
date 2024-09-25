import { FaXTwitter } from "react-icons/fa6"
import { HiHome } from "react-icons/hi"
import Link from "next/link"

export default function Slidebar() {
  return (
    <div className="space-y-4 p-4 ">
      <Link href="/">
        <FaXTwitter className="w-16 h-16 cursor-pointer p-3 hover:bg-gray-100 rounded-full transition-all duration-200" />
      </Link>
      <Link href="/" className="flex items-center p-3 hover:bg-gray-100 rounded-full transition-all duration-full gap-3 w-fit">
        <HiHome className="w-7 h-7 " />
        <span className="font-bold hidden xl:inline">Home</span>
      </Link>
      <button className="bg-blue-400 text-white w-48 h-9 shadow-md py-2 px-4 rounded-full hover:brightness-90 transition-colors duration-200 hidden xl:inline font-semibold">
        Sign In
      </button>
    </div>
  )
}
