import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { prisma } from "@/lib/prisma";

export async function ListBook() {
  const title: string[] = ["Titres", "Genres", "Ecrivin"];

  const books = await prisma.books.findMany({
    select: {
      id: true,
      title: true,
      types: true,
      author: true,
    },
  });

  const countBooks = books.length;

  return (
    <div className="w-full">
      <Table>
        <TableCaption>Liste des utilisateurs.</TableCaption>
        <TableHeader>
          <TableRow>
            {title.map((item) => (
              <TableHead key={item} className="w-full">
                {item}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {books?.map((book) => (
            <TableRow key={book.id}>
              <TableCell className="font-medium">{book.title}</TableCell>
              <TableCell>{book.types}</TableCell>
              <TableCell className="text-right">{book.author}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell className="font-medium">Total livres</TableCell>
            <TableCell className="text-right">{countBooks}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
