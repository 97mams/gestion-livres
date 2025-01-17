import { prisma } from "./prisma";


export async function CreateEmprunteAction(userId: string, bookId: number) {
    try {
        await prisma.emprunts.create({
            data: {
                bookId: bookId,
                userId: userId
            }
        })
        return true
    }
    catch (error) {
        console.log(error);

    }
}