import { prisma } from "@/src/lib/prisma"
import { faker } from "@faker-js/faker"

export default async function Page(props: Promise<{ params: { userId: number } }>) {

    const param = Number((await props).params.userId)
    const user = await prisma.members.findUnique({ where: { id: param } })

    return (
        <div className="w-full">
            <div className="max-w-md h-[28rem] border border-border rounded-xl flex m-auto mt-8 space-y-1">

            </div>
        </div>
    )
}