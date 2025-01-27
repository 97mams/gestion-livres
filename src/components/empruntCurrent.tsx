"use client"

import { auth } from "../lib/auth"
import { prisma } from "../lib/prisma"
import { path } from "../lib/pathHelper"
import { useEffect, useState } from "react"

type emprunt =
    {
        book: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            author: string;
            types: string;
            resume: string;
            upvotes: number;
            mockupImages: string;
            date_publish: string;
        };
    }


export function EmpruntCurrent() {
    const [emprunt, setEmprunt] = useState<emprunt[]>()

    useEffect(() => {
        fetch("http://127.0.0.1:3000/api/emprunts?userEmail=mamiso@gmail.com")
            .then(resp => resp.json())
            .then(data => {
                setEmprunt(data)
            })
    }, [])


    return (
        <div className="w-60 border-l h-screen px-5  right-0 border-r-gray-700">
            <h1 className="flex justify-between items-baseline mt-8 text-xl font-bold">
                Livres
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500" viewBox="0 0 20 20" fill="currentColor">
                    <path
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    />
                </svg></h1>
            <ul>
                {
                    emprunt?.map((emprunts) => (
                        <li key={emprunts.book.id} className="w-full list-disc">
                            <a href={`/book/${path(emprunts.book.types)}/${emprunts.book.title}`}>
                                {emprunts.book.title}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}