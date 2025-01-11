"use client"
import { Input } from "@/src/components/input"
import { createBookAction } from "@/src/lib/book.action"
import { CreateUserAction, updateUserAction } from "@/src/lib/user.action"
import { useFormStatus } from "react-dom"
import { SubmitButton } from "./SubmitButton"

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

type membre = {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    contact: string
    status: boolean
}

export function UserForm({ data }: { data?: membre | null }) {

    const onSubmit = async (formData: FormData) => {
        if (data) {
            await updateUserAction(data.id, formData)
        } else {
            await CreateUserAction(formData)
        }
    }
    const { pending } = useFormStatus()


    return (
        <form
            className="w-full"
            action={onSubmit}
        >
            <Input dValue={data?.firstName} className="w-full" name="firstName" id="first-name" children="Nom" placeholder="votre nom" />
            <Input dValue={data?.lastName} className="w-full" name="lastName" id="last-name" children="Prénoms" placeholder="votre prenom" />
            <Input dValue={data?.email} className="w-full" name="mail" id="e-mail" children="E-mail" type="mail" placeholder="exemple@gmail.com" />
            <Input dValue={data?.contact} className="w-full" name="contact" id="contact" children="Téléphone" placeholder="numéro téléphone" />
            <Input dValue={data?.contact} type="password" className="w-full" name="pwd" id="pwd" children="Mot de passe" placeholder="mot de passe" />
            <SubmitButton pending={pending} text={data ? "Modifier" : "Ajouter"} />
        </form>
    )
}

