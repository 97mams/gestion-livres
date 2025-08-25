import { compareSync } from "bcryptjs";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { prisma } from "./prisma";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string() })
          .safeParse(credentials);
        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await prisma.user.findUnique({
            where: { email: email },
          });
          if (compareSync(password, String(user?.password))) {
            return user;
          }
          return null;
        } else {
          throw new Error("ivalid credentials");
        }
      },
    }),
  ],
});
