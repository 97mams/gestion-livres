"use client";

import { useActionState } from "react";
import { authenticate } from "../lib/login.action";
import { Input } from "./input";
import { SubmitButton } from "./SubmitButton";

export function LoginForm() {
    const [errorMessage, formAction, isPending] = useActionState(authenticate, undefined)

    return (
        <form action={formAction} className="space-y-3">
            <div className="flex-1 rounded-lg bg-card px-6 pt-8">
                <h1 className="mb-3 border-b-2 border-border text-center text-2xl">
                    Authentification
                </h1>
                <div className="w-full">
                    <Input name="email" type="email" id="email" placeholder="exemple@gmail.com" >
                        email
                    </Input>
                </div>
                <div className="mt-4">
                    <Input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Entre votre mot de passe"
                    >
                        Mot de passe
                    </Input>
                </div>
                <SubmitButton pending={isPending} text="Login" />
                <div
                    className="flex h-8 items-end space-x-1"
                    aria-live="polite"
                    aria-atomic="true"
                >
                    {errorMessage && (
                        <>
                            <p className="text-sm text-red-500">! {errorMessage}</p>
                        </>
                    )}
                </div>
            </div>
        </form>
    )
}