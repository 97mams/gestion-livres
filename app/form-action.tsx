"use client"
import { Input } from "@/src/components/input"
import { Button } from "@/src/components/button"
import { createBookAction } from "./form.action"

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
            <Input type="text" name="title" id="title" children="mams" />
            <Input type="text" name="author" id="author" children="Auteur" />
            <Input type="type" name="types" id="type" children="Genre" />
            <Input type="type" name="date" id="date-pub" children="Date de publication" />
            <Button type="submit" className="w-full">submit</Button>
        </form>
    )
}