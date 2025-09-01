"use client";

import { LogOutIcon } from "lucide-react";
import { signOut } from "next-auth/react";
import { Button } from "./ui/button";

export function LogOut() {
  const handelSingOut = async () => {
    await signOut();
  };

  return (
    <Button onClick={handelSingOut}>
      <LogOutIcon />
    </Button>
  );
}
