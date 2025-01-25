import { auth } from "../lib/auth"
import { prisma } from "../lib/prisma"
import { path } from "../lib/pathHelper"

export async function EmpruntCurrent() {
    const userEmail = (await auth())?.user?.email
    const empruntCurrent = await prisma.emprunts.findMany({
        where: {
            user: {
                email: userEmail
            }
        },
        include: {
            book: true
        }
    })
    console.log(empruntCurrent);

    return (
        <div className="w-60 border-l h-screen px-4 fixed right-0 border-r-gray-700">
            <h1 className="flex justify-between items-baseline mt-8 text-xl font-bold">
                Livres
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500" viewBox="0 0 20 20" fill="currentColor">
                    <path
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    />
                </svg></h1>
            <ul>
                {
                    empruntCurrent.map((emprunts) => (
                        <li key={emprunts.id} className="w-full list-disc">
                            <a href={`/book/${path(emprunts.book.types)}/${emprunts.bookId}`}>
                                {emprunts.book.title}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}