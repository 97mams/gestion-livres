import { LoginForm } from "@/src/components/login-form"
import { auth } from "@/src/lib/auth"

export default async function Page() {
    const session = await auth()
    console.log(session?.user?.email);

    return (
        < main className="flex items-center justify-center md:h-screen" >
            <div className="relative flex w-full max-w-[400px] border border-border flex-col space-y-2.5 md:-mt-32">
                <LoginForm />
            </div>
            <div>{session?.user?.name}</div>
        </main >
    )
}