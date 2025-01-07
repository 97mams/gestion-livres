"use client"

import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import Router from 'next/router';

export function BackButton() {
    const backPage = () => {
        Router.back()
    }
    return (
        <button onClick={backPage} className='cursor-pointer mb-3 px-2 py-1 hover:px-1 border border-border rounded-xl'>
            <KeyboardBackspaceOutlinedIcon /> retour
        </button>
    )
}