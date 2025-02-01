'use client';

import { useEffect, useState } from 'react';
import { path } from '../lib/pathHelper';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { prisma } from '../lib/prisma';


type emprunt = {
    id: number,
    booId: number,
    userId: string,
    book: {
        id: number;
        title: string;
        author: string;
        types: string;
        resume: string;
        upvotes: number;
        mockupImages: string;
        date_publish: string;
        createdAt: Date;
        updatedAt: Date;
    }
}

export function EmpruntCurrent({ userEmail }: { userEmail: string | null | undefined }) {
    const [emprunts, setEmprunts] = useState<emprunt[]>();
    const [loading, setLoading] = useState(true);

    const url = `/api/emprunts?email=${userEmail}`
    useEffect(() => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                setLoading(false);
                setEmprunts(data);

            })
            .catch((error) => {
                console.log(error);
                throw new Error(error)
            })

    }, [url]);


    return (
        <div className='w-80 mt-8 mx-4'>
            <div className="flex justify-between">
                <h1 className="text-xl font-bold">Livres </h1>
                <FavoriteIcon color='secondary' />
            </div>
            {loading ?
                <div>Chargement...</div>
                :
                <ul className='flex flex-col gap-2 mt-4'>
                    {emprunts?.map((emprunt) => (
                        <li key={(emprunt.id)} className='hover:text-secondary'>
                            <a href={`/book/${path(emprunt.book.types)}/${emprunt.book.id}`}>{emprunt.book.title}</a>
                        </li>
                    ))}
                </ul>}
        </div>
    );
}