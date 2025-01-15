'use server';

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
                const email = "123@gmail.com"
                const password = "1234"
                if (credentials.email === email && credentials.password === password) {
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