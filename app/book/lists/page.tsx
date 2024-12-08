"use client"

import { BookCard } from "@/src/components/bookCard"

export default function Page() {
    return (
        <div className="w-full p-4">
            <div className="w-full">
                <h1 className="font-bold text-foreground text-2xl">Nouvelle livres</h1>
                <div className="w-full flex gap-2">
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                </div>
            </div>
            <div className="w-full">
                <h1 className="font-bold text-foreground text-2xl">Livres</h1>
                <div className="grid grid-cols-4 gap-4">
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                </div>
            </div>
        </div>
    )
}