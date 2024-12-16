import { ListUser } from "@/src/components/admin/listUser"

export default function Page() {
    return (
        <div className="w-full p-8">
            <h1 className="text-foreground text-xl font-bold mb-4">Listes membres</h1>
            <ListUser />
        </div>
    )
}