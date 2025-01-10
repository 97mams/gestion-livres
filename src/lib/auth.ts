import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod'
import { prisma } from './prisma';

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

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({ email: z.string().email(), password: z.string().min(4) })
                    .safeParse(credentials)

                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.data
                    const user = await getUser(email)
                    if (!user) return null
                    const passwordsMatch = await bcrypt.compare(password, user.password)
                }

                return null
            }
        })],
});