import { prisma } from "@/src/lib/prisma";
import { ListBook } from "@/src/components/listBook";
import { EmpruntCurrent } from "@/src/components/empruntCurrent";
import { auth } from "@/src/lib/auth";

export default async function Page() {
  const allBook = await prisma.books.findMany()
  const recentBook = await prisma.books.findMany({
    orderBy: { createdAt: "desc" },
    take: 4
  })
  return (
    <div className="w-full p-4 flex">
      <div className="flex flex-col gap-3">
        <ListBook data={recentBook} title="Nouveaux livres" />
        <ListBook data={allBook} title="Touts livres" />
      </div>
    </div>
  )
}





