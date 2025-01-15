"use client"

import { signOut } from "next-auth/react"

export function LogOut() {
    const handelSingOut = async () => {
        await signOut()
    }

    return (
        <button onClick={handelSingOut} type="button" className="px-3 rounded-xl py-2 border border-blue-500">deconnecter</button>
    )
}