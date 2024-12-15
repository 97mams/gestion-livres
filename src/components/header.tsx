import Image from "next/image"
import { faker } from "@faker-js/faker"
import Link from "next/link"

export function Header() {

    return (
        <nav className="sticky top-0 z-10 bg-accent text-foreground">
            <div className="max-w-5xl mx-auto px-4">
                < div className="flex items-center justify-between h-16" >
                    <span className="text-2xl font-semibold">Boky</span>
                    <div className="flex space-x-4">
                        <a href="/">Home</a>
                        <a href="/book/lists">Liste</a>
                    </div>
                </div >
            </div >
        </nav >
    )
}