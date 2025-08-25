import { auth } from "@/lib/auth";

export default async function Page() {
  const session = await auth();

  return <div>{session?.user ? session?.user.name : "not singin"}</div>;
}
