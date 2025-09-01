import { prisma } from "@/lib/prisma";

export async function checkUserRole(email: string): Promise<string | null> {
  const user = await prisma.user.findUnique({
    select: { role: true },
    where: { email: email || "" },
  });
  if (!user) {
    return "ca not find user.";
  }
  return user.role;
}
