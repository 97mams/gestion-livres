import { prisma } from "@/src/lib/prisma";
import { BookCard } from "@/src/components/bookCard";

export default async function Page() {
    const allBook = await prisma.books.findMany()
    const recentBook = await prisma.books.findMany({
        orderBy: { createdAt: "desc" },
        take: 4,

    })
    return (
        <div className="w-full p-4">
            <div className="w-full">
                <h1 className="font-bold text-foreground text-2xl">Nouvelle livres</h1>
                <div className="w-full flex gap-4" key={"new-book"}>
                    {
                        recentBook.map((book) => (
                            <BookCard
                                title={book.title}
                                image={book.mockupImages}
                                author={book.author}
                            />
                        ))
                    }
                </div>
            </div>
            <div className="w-full">
                <h1 className="font-bold text-foreground text-2xl">Livres</h1>
                <div className="grid grid-cols-4 gap-4" key={"all-book"}>
                    {
                        allBook.map((book) => (
                            <BookCard
                                title={book.title}
                                image={book.mockupImages}
                                author={book.author}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
