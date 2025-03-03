import { prisma } from "@/src/lib/prisma";
import { ListBook } from "@/src/components/listBook";

export default async function Page() {
  const allBook = await prisma.books.findMany({
    select: {
      id: true,
      author: true,
      title: true,
      date_publish: true,
      types: true,
      mockupImages: true
    }
  })
  const recentBook = await prisma.books.findMany({
    orderBy: { createdAt: "desc" },
    take: 4
  })
  return (
    <div className="w-full h-screen p-4 flex">
      <div className="flex flex-col gap-3">
        <ListBook data={recentBook} title="Nouveaux livres" />
        <ListBook data={allBook} title="Touts livres" />
      </div>
    </div>
  )
}





