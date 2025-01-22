"use server"

import { prisma } from "@/src/lib/prisma"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache";
import path from "node:path"
import fs from "node:fs"

const UPLOAD_DIR = path.resolve(process.env.ROOT_PATH ?? "", "public/uploads")

export async function createBookAction(book: {
    title: string,
    author: string,
    types: string,
    resume: string,
    mockupImages: Blob,
    date_publish: string
}) {

    const file = book.mockupImages

    if (file) {
        const buffer = Buffer.from(await file.arrayBuffer())
        if (!fs.existsSync(UPLOAD_DIR)) {
            fs.mkdirSync(UPLOAD_DIR)
        }

        console.log((file as File).name)

        fs.writeFileSync(path.resolve(UPLOAD_DIR, (file as File).name), buffer)
        const newBook = await prisma.books.create({
            data: {
                title: book.title,
                author: book.author,
                types: book.types,
                resume: book.resume,
                mockupImages: (file as File).name,
                date_publish: book.date_publish
            }
        })
        if (newBook) {
            revalidatePath('/bool/list')
            redirect('/book/list')
        } else {
            new Error("Reccoding fails")
        }
    } else {
        throw new Error("upload failed")
    }

}


export async function deletedBookAction(id: number) {
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

export async function checkedUserWithBook(bookId: number | undefined, userEmail: string): Promise<boolean> {
    const user = await prisma.user.findFirst({ where: { email: userEmail } })
    const emprunts = await prisma.emprunts.findFirst({ where: { bookId } })
    if (emprunts && user?.id === emprunts.userId) {
        return true
    }

    return false
}