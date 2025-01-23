import { prisma } from "@/src/lib/prisma"
import { ListBook } from '@/src/components/listBook'
import { BackButton } from "@/src/components/backButton"
import { auth } from "@/src/lib/auth"
import { redirect } from "next/navigation"
import { BookCardDetail } from "@/src/components/bookCardDetail"
import { checkedUserWithBook } from "@/src/lib/book.action"

export default async function Page(props: {
    params: Promise<{
        bookId: number
    }>
}) {
    const session = await auth()
    if (!session) {
        redirect('/login')
    }

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
            <BackButton />
            <BookCardDetail email={String(session.user?.email)} etat={await checkedUserWithBook(book?.id, String(session.user?.email))} book={book} />
            <ListBook data={bookRender} title="Même genre" />
        </div>
    )
}