import { faker } from "@faker-js/faker"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
    await prisma.books.create({
        data: {
            title: faker.book.title(),
            author: faker.book.author(),
            types: faker.book.genre(),
            date_publish: faker.book.publisher()
        }
    })
}
for (let index = 0; index < 20; index++) {
    main()
        .then(async () => {
            await prisma.$disconnect()
        })
        .catch(async (e) => {
            console.error(e);
            await prisma.$disconnect()
        })
}