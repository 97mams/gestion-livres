import { prisma } from "@/src/lib/prisma"
import { Card, CardContent, CardTitle } from "@/src/components/card"
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
        <div className=" m-auto mt-28">
            <Card>
                <CardTitle>{book?.title}</CardTitle>
                <CardContent>
                    <p>{book?.resume}
                        <br />
                        <span className="text-gray-200 mt-2">
                            - {book?.author}
                            <br />
                            "{book?.date_publish}"
                        </span>
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}