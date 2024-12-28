"use client";

import Link from "next/link"
import { usePathname } from "next/navigation"

export function SideBar(props: { items: String[] }) {
    const pathname: string = usePathname()
    const active: string = "line-through"
    console.log(pathname.includes(""))

    return (
        <div className="w-60 border-r px-4 border-r-gray-700 min-h-screen rounded-md">
            <p className="text-xl w-full mt-8 bg-gray-900 rounded-sm p-2">Genres</p>
            <ul className="w-full flex flex-col gap-2 mt-2 ">
                {
                    props.items.map((item, key) => (
                        <li
                            key={key}
                            className={`w-full hover:line-through ${pathname.includes(String(item)) ? active : ''}`}
                        >
                            <Link href={`/book/lists/${item}`}>{item}</Link>
                        </li>
                    ))
                }
            </ul>
        </div >
    )
}