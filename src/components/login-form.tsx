"use client";

import { useActionState } from "react";
import { authenticate } from "../lib/login.action";
import { Input } from "./ui/input";
import { SubmitButton } from "./SubmitButton";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

export function LoginForm() {
    const [errorMessage, formAction, isPending] = useActionState(authenticate, undefined)

    return (
        <form action={formAction}>
            <Label htmlFor="email">Email</Label>
            <Input name="email" type="email" id="email" placeholder="email.exemple@gmail.com" />
            <Label htmlFor="password">Mot de passe</Label>
            <Input
                id="password"
                type="password"
                name="password"
                placeholder="password"
            />
            <Button variant={"outline"} className="mt-2">Connecter</Button>
            {/* <SubmitButton pending={isPending} text="Login" /> */}
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
        </form >
    )
}