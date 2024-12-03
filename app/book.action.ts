"use server"

import { prisma } from "@/src/lib/prisma"
import { redirect } from "next/navigation"

export async function createBookAction(book: {
    title: string,
    author: string,
    types: string,
    date_publish: string
}) {
    const newBook = await prisma.books.create({
        data: {
            title: book.title,
            author: book.author,
            types: book.types,
            date_publish: book.date_publish
        }
    })

    if (newBook) {
        redirect('/book/list')
    } else {
        new Error("Reccoding fails")
    }
}

export async function DeletedBookAction(id: number) {
    const deleted = await prisma.books.delete({
        where: {
            id: id
        }
    })

    if (deleted) {
        redirect('/book/lists')
    }
    return null
}