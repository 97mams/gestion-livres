import Image from "next/image"
import { faker } from "@faker-js/faker"
import Link from "next/link"

export function Header() {

    return (
        <div className="w-full px-8 py-4 shadow-md flex items-baseline justify-between">
            <Link href="/" >
                <img src={"/vercel.svg"} alt={"log"} className="w-8 h-8 rounded-full bg-gray-900 p-2" />
            </Link>
            <div>
                <a href="/" className="px-3 py-2 border border-zinc-500 text-zinc-500 hover:bg-zinc-100 rounded-md">s'inscrire</a>
            </div>
        </div>
    )
}