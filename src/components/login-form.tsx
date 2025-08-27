"use client";

import { useActionState } from "react";
import { authenticate } from "../lib/login.action";
import { SubmitButton } from "./SubmitButton";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export function LoginForm() {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined
  );

  return (
    <div className="max-w-sm mt-20 m-auto">
      <form action={formAction}>
        <Label htmlFor="email">Email</Label>
        <Input
          name="email"
          type="email"
          id="email"
          placeholder="email.exemple@gmail.com"
        />
        <Label htmlFor="password">Mot de passe</Label>
        <Input
          id="password"
          type="password"
          name="password"
          placeholder="password"
        />
        <SubmitButton
          pending={isPending}
          text="se connecter"
          classname="mt-2"
        />
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
      </form>
    </div>
  );
}
