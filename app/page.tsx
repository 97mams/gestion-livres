import { prisma } from "@/src/lib/prisma";
import { Table, TableHeader, TableTh, TableBody, TableTd, TableTr } from "@/src/components/table";

export default async function Page() {
  const bookLists = await prisma.books.findMany()

  return (
    <div className="p-8">
      <h1 className="text-foreground pb-2 text-3xl font-bold">Liste livres</h1>
      <Table>
        <TableHeader>
          <TableTh>Auteur</TableTh>
          <TableTh>Titre</TableTh>
          <TableTh>Genre</TableTh>
          <TableTh>Date de sortie</TableTh>
        </TableHeader>
        <TableBody>
          {bookLists.map(book => (
            <TableTr key={book.id}>
              <TableTd>
                {book.author}
              </TableTd>
              <TableTd>
                {book.title}
              </TableTd>
              <TableTd>
                {book.types}
              </TableTd>
              <TableTd>
                {book.date_publish}
              </TableTd>
            </TableTr>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
