import { prisma } from "@/src/lib/prisma"
import { ListBook } from '@/src/components/listBook'

export default async function Page(props: {
    params: Promise<{
        bookId: number
    }>
}) {
    const id = Number((await props.params).bookId)

    const book = await prisma.books.findUnique({
        where: {
            id: id
        }
    })

    let genre = ""

    if (book) {
        genre = book.types
    }
    const books = await prisma.books.findMany({
        where: {
            types: genre
        }
    })

    const bookRender = books.filter(b => b.id !== book?.id)

    return (
        <div className="p-8 w-full">
            <div className="flex m-auto mb-8 gap-2 w-8/12">
                <img className="w-1/2 object-cover" src={`/uploads/${book?.mockupImages}`} />
                <div className="flex items-start flex-col gap-4 w-1/2 h-full" key={"list"}>
                    <h2 className="text-xl p-0">
                        {book?.title}
                        <br />
                        <span className="text-sm text-accent m-0">
                            ({book?.types})
                        </span>
                    </h2>
                    <p className="text-sm text-accent-foreground">{book?.resume}</p>
                    <i>{book?.author}</i>
                    <p>{book?.date_publish}</p>
                    <div>
                        <button className="border border-primary rounded-lg">prendre</button>
                    </div>
                </div>
            </div>
            <ListBook data={bookRender} title="Même genre" />
        </div>
    )
}