import { ListBook } from "@/components/listBook";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth();

  const user = await prisma.user.findUnique({
    select: { role: true },
    where: { email: session?.user?.email || "" },
  });

  if (user?.role === "admin") {
    redirect("/admin");
  }

  const allBook = await prisma.books.findMany({
    select: {
      id: true,
      author: true,
      title: true,
      date_publish: true,
      types: true,
      mockupImages: true,
    },
  });
  const recentBook = await prisma.books.findMany({
    orderBy: { createdAt: "desc" },
    take: 4,
  });
  return (
    <div className="w-full flex">
      <div className="flex flex-col gap-3">
        <ListBook data={recentBook} title="Nouveaux livres" />
        <ListBook data={allBook} title="Touts livres" />
      </div>
    </div>
  );
}
