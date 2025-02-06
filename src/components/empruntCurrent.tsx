'use client';

import { useEffect, useState } from 'react';
import { path } from '../lib/pathHelper';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { prisma } from '../lib/prisma';
import useSWR from 'swr'


export function EmpruntCurrent({ userEmail }: { userEmail: string | null | undefined }) {
    const url: string = `/api/emprunts?email=${userEmail}`
    const fetcher = (url: string) => fetch(url).then(resp => resp.json())
    const { data: borrowedBooks, mutate, isLoading } = useSWR(`/api/emprunts?email=${userEmail}`, fetcher)


    return (
        <div className='w-80 mt-8 mx-4'>
            <div className="flex justify-between">
                <h1 className="text-xl font-bold">Livres </h1>
                <FavoriteIcon color='secondary' />
            </div>
            {isLoading ?
                <div>Chargement...</div>
                :
                <ul className='flex flex-col gap-2 mt-4'>
                    {borrowedBooks?.map((emprunt: any) => (
                        <li key={(emprunt.id)} className='hover:text-secondary'>
                            <a href={`/book/${path(emprunt.book.types)}/${emprunt.book.id}`}>{emprunt.book.title}</a>
                        </li>
                    ))}
                </ul>}
        </div>
    );
}