import { prisma } from "@/src/lib/prisma"
import { faker } from "@faker-js/faker"

export default async function Page(props: {
    params: Promise<{
        bookId: number
    }>
}) {

    const fakeData = faker.date.anytime

    const id = Number((await props.params).bookId)

    const book = await prisma.books.findUnique({
        where: {
            id: id
        }
    })
    console.log(book);


    return (
        
    )
}