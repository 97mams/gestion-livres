import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export default async function Page() {
    const session = await auth()
    const userEmail = session?.user?.email
    console.log(session?.user);

    const emprunts = await prisma.emprunts.findMany({
        where: {
            user: {
                email: userEmail
            }
        }
    })
    console.log(emprunts);

    return (
        <div>
            {emprunts.length}
        </div>
    )
}