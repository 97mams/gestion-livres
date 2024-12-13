import { BookCard } from "./bookCard"
import Link from "next/link"

interface book {
    id: number,
    title: string,
    author: string,
    resume?: string,
    date_publish?: string,
    mockupImages?: string
}

export function ListBook(props: { data?: book[], title?: string }) {

    return (<div className="w-full">
        <h1 className="font-bold text-foreground text-2xl">{props.title ?? "Liste"}</h1>
        <div className="grid grid-cols-4 gap-4">
            {
                props.data?.map((book) => (
                    <Link href={`/book/${book?.id}`} key={book?.id}>
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