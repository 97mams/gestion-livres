import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { string, z } from 'zod'
import { prisma } from './prisma';
import { compare } from 'bcryptjs'
import { PrismaAdapter } from "@auth/prisma-adapter"

export const { auth, handlers, signIn, signOut } = NextAuth({
    providers: [

        Credentials({
            credentials: {
                email: {},
                password: {}
            },
            authorize: async (credentials) => {
                const parsedCredentials = z
                    .object({ email: z.string().email(), password: z.string() })
                    .safeParse(credentials)
                console.log(parsedCredentials.success)
                if (parsedCredentials.success) {
                    return {
                        name: "mety le izy"
                    }
                } else {
                    throw new Error('ivalid credentials')
                }
            }
        })
    ]
})

// export const { auth, handlers, signIn, signOut } = NextAuth({
//     adapter: PrismaAdapter(prisma),
//     providers: [
//         Credentials({
//             credentials: {
//                 email: {},
//                 password: {}
//             },
//             authorize: async (credentials) => {
//                 const parsedCredentials = z
//                     .object({ email: z.string().email(), password: z.string().min(4) })
//                     .safeParse(credentials)
//                 if (parsedCredentials.success) {
//                     const { email, password } = parsedCredentials.data
//                     const user = await prisma.user.findUnique({ where: { email: email } })
//                     if (user) {
//                         const userMatched = compare(password, String(user.password))
//                         if (!userMatched) return null
//                         return user
//                     }
//                 }
//             }

//         })
//     ]
// });


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