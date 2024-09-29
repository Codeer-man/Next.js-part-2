"use client"

import { FaXTwitter } from "react-icons/fa6"
import { HiHome, HiDotsHorizontal } from "react-icons/hi"
import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"

export default function Slidebar() {
  const { data: session } = useSession();

  console.log(session)
  return (
    <div className="p-4 flex flex-col justify-between h-screen">
      <div className="flex flex-col gap-4">

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
      {session && (
        <div className="text-gray-700 text-sm flex items-center cursor-pointer p-3 hover:bg-gray-100 rounded-full transition-all duration-200">
          <img src={session?.user?.image ?? '/default-avatar.png'} alt="user-img" className="h-10 w-10 rounded-full xl:mr-2" />
          <div className="hidden xl:inline">
            <h4 className="font-bold">{session?.user?.name}</h4>
            <p className="text-gray-500">@{session?.user?.name?.replace(/\s+/g, '').toLowerCase()}</p>
          </div>
          <HiDotsHorizontal className="h-5 xl:ml-8 hidden xl:inline" />
        </div>
      )}
    </div>
  )
}
