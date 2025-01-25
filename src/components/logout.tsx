"use client"

import { signOut } from "next-auth/react"

export function LogOut(props: { classname: string }) {
    const handelSingOut = async () => {
        alert("click")
        await signOut()
    }

    return (
        <a onClick={handelSingOut} className={props.classname + ' cursor-pointer'}> Se deconnecter</a >
    )
}