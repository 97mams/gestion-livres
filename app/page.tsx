import { prisma } from "@/src/lib/prisma";
import { ListBook } from "@/src/components/listBook";


export default async function Page() {
  const allBook = await prisma.books.findMany()
  const recentBook = await prisma.books.findMany({
    orderBy: { createdAt: "desc" },
    take: 4
  })
  return (
    <div className="w-full p-4">
      <div className="w-full flex flex-col gap-3 ">
        <ListBook data={recentBook} title="Nouveaux livres" />
        <ListBook data={allBook} title="Touts livres" />
      </div>
    </div>
  )
}





