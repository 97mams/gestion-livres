import { faker } from "@faker-js/faker"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
    const array = ["tman-1.jpg", "tman-2.jpg", "lawless.jpg", "studies.jpeg", "kingMakers.jpg", "joseph.jpeg"]
    const nameImage = faker.helpers.arrayElement(array)
    await prisma.books.create({
        data: {
            title: faker.book.title(),
            author: faker.book.author(),
            types: faker.book.genre(),
            resume: faker.lorem.paragraphs(),
            mockupImages: nameImage,
            date_publish: String(faker.date.past({ years: 1990 }))
        }
    })
}
for (let index = 0; index < 100; index++) {
    main()
        .then(async () => {
            await prisma.$disconnect()
        })
        .catch(async (e) => {
            console.error(e);
            await prisma.$disconnect()
        })
}