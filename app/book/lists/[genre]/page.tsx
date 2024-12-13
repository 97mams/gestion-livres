import { prisma } from "@/src/lib/prisma"
import { ListBook } from "@/src/components/listBook"

export default async function (props: {
    params:
    Promise<{
        genre: string
    }>
}) {

    const genreParams = (await props.params).genre
    let genre = genreParams
    if (genreParams.includes("%")) {
        const textKey = genreParams.lastIndexOf("%")
        const textLength = genreParams.length
        const firstText = genreParams.slice(0, textKey)
        const lastText = genreParams.slice((textKey + 3), textLength)
        genre = firstText + " " + lastText
    }
    const bookByGenre = await prisma.books.findMany({
        where: {
            types: genre,
        },
    })

    return (
        <div className="w-full p-4">
            <ListBook data={bookByGenre} title={genre} />
        </div>
    )
} 