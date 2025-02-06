"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { path } from "../lib/pathHelper";

export function SideBar(props: { items: String[] }) {
    const pathname: string = usePathname()
    const active: string = "line-through"
    const chechItem = (item: String) => {
        const text = item.split(' ')
        return text[0]
    }

    return (
        <div className="w-60 border-r px-4 border-r-gray-700 min-h-screen rounded-md">
            <p className="text-xl w-full mt-8 bg-gray-900 rounded-sm p-2">Genres</p>
            <ul className="w-full flex flex-col gap-2 mt-2 overflow-auto">
                {
                    props.items.map((item, key) => (
                        <li
                            key={key}
                            className={`w-full hover:line-through ${pathname.includes(chechItem(item)) ? active : ''}`}
                        >
                            <Link href={`/book/lists/${path(item)}`}>{item}</Link>
                        </li>
                    ))
                }
            </ul>
        </div >
    )
}