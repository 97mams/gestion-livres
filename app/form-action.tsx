"use client"
import { Input } from "@/src/components/input"

export function FormAction() {

    const onSubmit = () => {
        ///
    }

    return (
        <form action={onSubmit} className="text-zinc-600">
            <Input type="text" name="title" id="title" children="mams" />
            <Input type="text" name="author" id="author" children="Auteur" />
            <Input type="type" name="type" id="type" children="Genre" />
            <button>submit</button>
        </form>
    )
}