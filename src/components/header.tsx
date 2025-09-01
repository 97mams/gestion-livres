import Image from "next/image";
import Link from "next/link";
import { auth } from "../lib/auth";
import { Avatar } from "./avatar";
import { GithubIcon } from "./GithubIcon";

export async function Header() {
  const session = await auth();
  const email: string = String(session?.user?.email);

  return (
    <nav className="sticky top-0 z-40 muted-foreground text-foreground border-b border-foreground">
      <div className="flex items-center justify-between h-16 p-2">
        <span className="text-2xl font-semibold">
          <Image src="/icon.png" alt="Logo" width={40} height={40} />
        </span>
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
            <GithubIcon size={30} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
