import Image from "next/image"
import { faker } from "@faker-js/faker"
import Link from "next/link"
import { Button } from "@mui/material"

export function Header() {

    return (
        <div className="sticky top-0 pt-4 bg-background">
            <div className="w-full px-8 py-4 border-b border-b-border flex justify-between">
                <Link href="/" >
                    <img src={"/vercel.svg"} alt={"log"} className="w-8 h-8 rounded-full bg-gray-900 p-2" />
                </Link>
                <div>
                    <Link href={"/"}>
                        <Button variant="outlined" className="">s'inscrire</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}