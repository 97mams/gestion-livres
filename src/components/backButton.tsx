"use client"

import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import { useRouter } from 'next/navigation';

export function BackButton() {
    const router = useRouter()
    const backPage = () => {
        router.back()
    }
    return (
        <button onClick={backPage} className='cursor-pointer mb-3 px-2 py-1 hover:px-1 border hover:shadow-lg hover:shadow-primary border-border rounded-xl'>
            <KeyboardBackspaceOutlinedIcon /> retour
        </button>
    )
}