import { UserForm } from "@/src/components/form"
import { ListUser } from "@/src/components/admin/listUser"

export default function Page() {

    return (
        <div className="w-full p-8">
            <div className="w-full">
                <h1 className="text-xl pb-3">Ajouter un membre</h1>
                <UserForm />
            </div>
            <div>
                <h1>Listes membres</h1>
                <ListUser />
            </div>

        </div>)
}