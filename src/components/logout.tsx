"use client"

import { signOut } from "next-auth/react"
import LogoutIcon from '@mui/icons-material/Logout';

export function LogOut(props: { classname: string }) {
    const handelSingOut = async () => {
        await signOut()
    }

    return (
        <a onClick={handelSingOut} className={props.classname + ' cursor-pointer'}>
            Se deconnecter
            <LogoutIcon />
        </a >
    )
}