"use client"
import { Input } from "@/src/components/input"
import { createBookAction } from "@/src/lib/book.action"
import { CreateUserAction } from "@/src/lib/user.action"
import { useFormStatus } from "react-dom"

export function FormAction() {

    const onSubmit = async (formData: FormData) => {
        await createBookAction({
            title: String(formData.get('title')),
            author: String(formData.get('author')),
            types: String(formData.get('types')),
            resume: String(formData.get('resume')),
            mockupImages: formData.get('upImage') as Blob,
            date_publish: String(formData.get('date'))
        })
    }

    return (
        <div className="m-auto">
            <form action={onSubmit}>
                <h1 className="text-accent font-bold text-3xl my-4">Ajouter un livre</h1>
                <div className="w-full grid grid-cols-2 gap-2 mb-4">
                    <Input type="text" name="title" id="title" children="Titre" />
                    <Input type="text" name="author" id="author" children="Auteur" />
                    <Input type="type" name="types" id="type" children="Genre" />
                    <Input type="type" name="resume" id="resume" children="Résumer" />
                    <Input type="type" name="date" id="date-pub" children="Date de publication" />
                    <Input type="file" name="upImage" id="upImage" children="Image" />
                </div>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export function UserForm() {

    const onSubmit = async (formData: FormData) => {
        await CreateUserAction(formData)
    }

    return (
        <form
            className="w-full"
            action={onSubmit}
        >
            <Input className="w-full" name="firstName" id="first-name" children="Nom" placeholder="votre nom" />
            <Input className="w-full" name="lastName" id="last-name" children="Prénoms" placeholder="votre prenom" />
            <Input className="w-full" name="mail" id="e-mail" children="E-mail" type="mail" placeholder="exemple@gmail.com" />
            <Input className="w-full" name="contact" id="contact" children="Téléphone" placeholder="numéro téléphone" />
            <SubmitButton />
        </form>
    )
}

const SubmitButton = () => {
    const { pending } = useFormStatus()
    return (
        <button
            className="mt-4 border border-primary text-primary px-3 py-1 rounded-xl hover:bg-primary/20"
        >
            {pending ? "Loading..." : "Ajouter"}
        </button>

    )
}