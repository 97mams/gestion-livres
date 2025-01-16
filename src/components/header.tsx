import Image from "next/image"
import { faker } from "@faker-js/faker"
import { Avatar } from "./avatar"
import { auth } from "../lib/auth"
import { LogOut } from "./logout"

export async function Header() {
    const session = await auth()

    return (
        <nav className="sticky top-0 z-10 bg-accent text-foreground">
            <div className="max-w-5xl mx-auto px-4">
                < div className="flex items-center justify-between h-16" >
                    <span className="text-2xl font-semibold">Boky</span>
                    <div className="flex space-x-4 items-baseline">
                        <a href="/">Home</a>
                        <a href="/book/lists">Liste</a>
                        {session ?
                            <div className="flex gap-2">
                                <LogOut />
                                <Avatar email={session.user?.email} />
                            </div>
                            : <a className="px-3 py-2 border border-foreground hover:outline hover:outline-primary rounded-xl" href="/login">Se connecter</a>}

                    </div>
                </div >
            </div >
        </nav >
    )
}