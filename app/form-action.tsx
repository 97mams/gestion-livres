"use client"
import { Input } from "@/src/components/input"
import { createBookAction } from "./book.action"
import { faker } from "@faker-js/faker"

export function FormAction() {

    const onSubmit = async (formData: FormData) => {
        await createBookAction({
            title: String(formData.get('title')),
            author: String(formData.get('author')),
            types: String(formData.get('types')),
            date_publish: String(formData.get('date'))
        })
    }

    return (
        <form action={onSubmit} className="flex flex-col gap-2">
            <Input type="text" name="title" id="title" children="mams" dValue={faker.book.title()} />
            <Input type="text" name="author" id="author" children="Auteur" />
            <Input type="type" name="types" id="type" children="Genre" />
            <Input type="type" name="date" id="date-pub" children="Date de publication" />
            <button type="submit" className="w-full rounded-md px-3 py-2 text-white">submit</button>
        </form>
    )
}