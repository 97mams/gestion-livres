'use client';

import { useEffect, useState } from 'react';
import { path } from '../lib/pathHelper';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { prisma } from '../lib/prisma';
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then(resp => resp.json())

export function EmpruntCurrent({ userEmail }: { userEmail: string | null | undefined }) {
    const { data, error, isLoading } = useSWR(`/api/emprunts?email=${userEmail}`, fetcher)


    return (
        <div className='fixed right-0 top-20'>
            {isLoading ?
                ''
                :
                <div className='min-w-50 mt-8 mx-8'>
                    <p className='font-medium'>Votre livre</p>
                    <ul>
                        {data?.map((emprunt: any) => (
                            <li key={(emprunt.id)}>
                                <a
                                    href={`/book/${path(emprunt.book.types)}/${emprunt.book.id}`}
                                    className='hover:underline w-full inline-block no-underline transition-colors hower:text-foreground text-muted-foreground overflow'
                                >
                                    {emprunt.book.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            }
        </div>
    );
}