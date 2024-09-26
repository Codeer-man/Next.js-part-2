"use client"

import { FaXTwitter } from "react-icons/fa6"
import { HiHome } from "react-icons/hi"
import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"

export default function Slidebar() {
  const { data: session } = useSession();

  return (
    <div className="space-y-4 p-4 flex flex-col">
      <Link href="/">
        <FaXTwitter className="w-16 h-16 cursor-pointer p-3 hover:bg-gray-100 rounded-full transition-all duration-200" />
      </Link>
      <Link href="/" className="flex items-center p-3 hover:bg-gray-100 rounded-full transition-all duration-full gap-3 w-fit">
        <HiHome className="w-7 h-7 " />
        <span className="font-bold hidden xl:inline">Home</span>
      </Link>

      {session ?
        <button className="bg-blue-400 text-white w-48 h-9 shadow-md px-4 rounded-full hover:brightness-90 transition-colors duration-200 hidden xl:inline font-semibold"
          onClick={() => signOut()}>
          Sign Out
        </button>
        :
        <button className="bg-blue-400 text-white w-48 h-9 shadow-md px-4 rounded-full hover:brightness-90 transition-colors duration-200 hidden xl:inline font-semibold"
          onClick={() => signIn()}>
          Sign In
        </button>} 


    </div>
  )
}
