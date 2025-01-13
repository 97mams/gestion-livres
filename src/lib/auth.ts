import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { z } from 'zod'
import { prisma } from './prisma';
import bcryptjs from 'bcryptjs'
import { PrismaAdapter } from "@auth/prisma-adapter"

async function getUser(email: string) {
    try {
        const user = prisma.members.findMany({
            where: { email: email }
        })
        return user
    } catch (error) {
        throw new Error('not user matching')
    }
}

export const { auth, handlers, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {}
            },
            authorize: async (credentials) => {
                const email = "idiot@gmail.com"
                const password = "1234"
                if (credentials.email === email && credentials.password === password) {
                    return {
                        email,
                        password
                    }
                }
            }

        })
    ]
});


// authorize: async (credentials) => {
//     const parsedCredentials = z
//         .object({ email: z.string().email(), password: z.string().min(4) })
//         .safeParse(credentials)

//     if (parsedCredentials.success) {
//         const { email, password } = parsedCredentials.data
//         const member = await getUser(email)

//         if (!member) return null
//         const passwordsMatch = bcryptjs.compareSync(password, member[0].password)
//         if (passwordsMatch) return member
//     }

//     return null

// }