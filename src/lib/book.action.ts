"use server"

import { prisma } from "@/src/lib/prisma"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache";
import { v2 as cloudinary } from "cloudinary"

interface UploadResult {
    url: String;
}

export async function createBookAction(book: {
    title: string,
    author: string,
    types: string,
    resume: string,
    mockupImages: File,
    date_publish: string
}) {

    const file = book.mockupImages
    const url = await saveFile(file)
    const newBook = await prisma.books.create({
        data: {
            title: book.title,
            author: book.author,
            types: book.types,
            resume: book.resume,
            mockupImages: String(url),
            date_publish: book.date_publish
        }
    })

    if (newBook) {
        revalidatePath('/bool/list')
        redirect('/book/list')
    } else {
        new Error("Reccoding fails")
    }
}

async function saveFile(file: File) {
    const arrayBuffer = await file.arrayBuffer()
    const buffer = new Uint8Array(arrayBuffer)
    const result = await new Promise<UploadResult>((resolve, reject) => {
        cloudinary.uploader
            .upload_stream({}, (error, result) => {
                if (error || error === undefined) {
                    reject(error || new Error("upload failed"))
                    return
                }
                if (result) {
                    resolve(result)
                }
            })
            .end(buffer)
    })
    return result.url
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