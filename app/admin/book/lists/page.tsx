import {
  Table,
  TableHeader,
  TableTd,
  TableTr,
  TableBody,
} from "@/components/table";
import { prisma } from "@/lib/prisma";

export default async function Page() {
  const tableTitle = ["titre", "auteur", "description", "vote", "sortie"];

  const bookResult = await prisma.books.findMany({
    orderBy: [{ createdAt: "desc" }],
  });

  return (
    <div className="w-full">
      <Table>
        <TableHeader>
          {tableTitle.map((title, key) => (
            <TableTd key={key}>{title}</TableTd>
          ))}
        </TableHeader>
        <TableBody>
          {bookResult.map((book) => (
            <TableTr key={book.id}>
              <TableTd>{book.title}</TableTd>
              <TableTd>{book.author}</TableTd>
              <TableTd>{book.resume}</TableTd>
              <TableTd>{book.upvotes}</TableTd>
              <TableTd>{book.date_publish}</TableTd>
            </TableTr>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
