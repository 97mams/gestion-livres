import { BookCard } from "./bookCard"
import Link from "next/link"

interface book {
    id: number,
    title: string,
    author: string,
    resume?: string,
    types?: string,
    date_publish?: string,
    mockupImages?: string
}

export async function ListBook(props: { data?: book[], title?: string }) {

    // await new Promise(r => setTimeout(r, 2000))
    return (<div className="w-full">
        <h1 className="font-bold text-foreground text-2xl my-3">{props.title ?? "Liste"}</h1>
        <div className="grid grid-cols-4 gap-4 mx-3">
            {
                props.data?.map((book) => (
                    <Link href={`/book/${book?.types}/${book?.id}`} key={book?.id}>
                        <BookCard
                            title={book?.title}
                            image={book?.mockupImages}
                            author={book?.author}
                        />
                    </Link>
                ))
            }
        </div>
    </div>)
}