import { UserForm } from "@/src/components/form"

export default function Page({ id }: { id: number }) {
    return (
        <div className="w-full p-8">
            <div className="w-full">
                <h1 className="text-xl pb-3">Ajouter un membre</h1>
                <UserForm />
            </div>
        </div>
    )
} 