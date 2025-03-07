"use client"

import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';

export function BackButton() {
    const router = useRouter()
    const backPage = () => {
        router.back()
    }
    return (
        <Button onClick={backPage} variant={'outline'} className='mb-2'>
            <KeyboardBackspaceOutlinedIcon /> retour
        </Button>
    )
}