"use client"
import { Input } from "@/src/components/input"
import { Button } from "@/src/components/button"

export function FormAction() {

    const onSubmit = (formData: FormData) => {
        console.log(formData);
    }

    return (
        <form action={onSubmit} className="flex flex-col gap-2">
            <Input type="text" name="title" id="title" children="mams" />
            <Input type="text" name="author" id="author" children="Auteur" />
            <Input type="type" name="type" id="type" children="Genre" />
            <Button type="submit" className="w-full">submit</Button>
        </form>
    )
}