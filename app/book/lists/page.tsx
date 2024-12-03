import { prisma } from "@/src/lib/prisma";
import { Table, TableHeader, TableTh, TableBody, TableTd, TableTr } from "@/src/components/table";
import Link from "next/link";
import { DeletedButton } from "../deletedBook";

export default async function Page() {

    const bookLists = await prisma.books.findMany()

    return (
        <div>
            <h1 className="text-black text-3xl font-bold">Liste livres</h1>
            <Table>
                <TableHeader>
                    <TableTh>Auteur</TableTh>
                    <TableTh>Titre</TableTh>
                    <TableTh>Genre</TableTh>
                    <TableTh>Date de sortie</TableTh>
                    <TableTh>Action</TableTh>
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
                            <TableTd>
                                <div className="flex gap-2">
                                    <EditButton bookId={book.id} />
                                    <DeletedButton bookId={book.id} />
                                </div>
                            </TableTd>
                        </TableTr>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

const EditButton = (props: { bookId?: number }) => {
    return (
        <Link
            className="border text-sm text-blue-700 border-blue-700 rounded-md p-2 hover:bg-blue-300"
            href={"/"}
        >
            edit
        </Link>
    )
}