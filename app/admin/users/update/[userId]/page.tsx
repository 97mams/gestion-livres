import { UserForm } from "@/src/components/form"
import { prisma } from "@/src/lib/prisma";

export default async function Page(props: Promise<{
    params: { userId: string }
}>) {

    const getParams = (await props).params
    const id = getParams.userId
    console.log(id);

    const users = await prisma.user.findFirst({ where: { id } })

    return (
        <div className="w-full p-8">
            <div className="w-full">
                <h1 className="text-xl pb-3">Ajouter un membre</h1>
                <UserForm data={users} />
            </div>
        </div>
    )
} 