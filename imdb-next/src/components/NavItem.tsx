"use client"
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export default function NavItem({ title, param }: { title: string, param: string }) {
    const searchParams = useSearchParams()
    const genre = searchParams.get('genre')

    return (
        <div>
            <Link href={`/?genre=${param}`}
                className={`hover:text-amber-600 font-semibold 
                ${genre === param ? "underline underline-offset-8 decoration-4 decoration-amber-600 rounded-lg " : ""}`}
            >{title}</Link>
        </div >
    )
}
