'use server'

import { prisma } from "./prisma";


export async function CreateEmprunteAction(email: string, bookId: number) {
    const user = await prisma.user.findUnique({ where: { email: email } })
    if (user) {
        if (!(await checkUniqueEmprunt(user?.id, bookId))) {
            await prisma.emprunts.create({
                data: {
                    bookId: bookId,
                    userId: user.id
                }
            })
        } else {
            console.log('efa nalaina io e');

        }
    }
    if (!user) throw new Error('user no matching')
}

const checkUniqueEmprunt = async (user: string, bookId: number): Promise<boolean> => {
    const empruntsCurrent = await prisma.emprunts.findMany({ where: { userId: user, bookId: bookId } })
    if (empruntsCurrent[0]) return true
    return false
}