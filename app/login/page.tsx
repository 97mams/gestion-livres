import { LoginForm } from "@/src/components/login-form"

export default function Page() {
    return (
        <main className="flex items-center justify-center md:h-screen">
            <div className="relative flex w-full max-w-[400px] border border-border flex-col space-y-2.5 md:-mt-32">
                <LoginForm />
            </div>
        </main>
    )
}