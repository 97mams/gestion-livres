import Image from "next/image";
import Link from "next/link";
import { auth } from "../lib/auth";
import { Avatar } from "./avatar";

export async function Header() {
  const session = await auth();
  const email: string = String(session?.user?.email);

  return (
    <nav className="sticky top-0 z-40 bg-accent text-foreground">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <span className="text-2xl font-semibold">Boky</span>
          <div className="flex space-x-4 items-baseline">
            {session ? (
              <div className="flex gap-4 items-center">
                <Link href="/">Home</Link>
                <Avatar email={email} />
              </div>
            ) : (
              ""
            )}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="githubIcon"
                width={40}
                height={40}
                className="rounded-full"
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
