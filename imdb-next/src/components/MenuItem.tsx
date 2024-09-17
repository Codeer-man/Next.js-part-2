import Link from "next/link";


export default function MenuItem({ title, address, Icon }: { title: string, address: string, Icon: any }) {
  return (
    <Link href={address} className="hover:bg-amber-500">
      <Icon className="text-2xl sm:hidden" />
      <p className="hidden sm:inline text-sm uppercase">{title}</p>
    </Link>
  )
}
