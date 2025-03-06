import { LoginForm } from "@/src/components/login-form"
import { auth } from "@/src/lib/auth"
import { redirect } from "next/navigation"
import { User } from "@prisma/client"

export default async function Page() {
    const session = await auth()
    if (session) {
        redirect('/')
    }

    return (
        < main className="flex items-center justify-center md:h-screen" >
            <div className="relative flex  border border-border flex-col">
                <LoginForm />
            </div>
        </main >
    )
}