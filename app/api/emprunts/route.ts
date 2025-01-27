"use server"

import { auth } from "@/src/lib/auth"
import { prisma } from "@/src/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

export const GET = async () => {
    try {
        const userEmail = (await auth())?.user?.email
        console.log(userEmail);

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

        return NextResponse.json(empruntCurrent)
    } catch (error) {
        console.log(error);
        throw new Error("Error api")

    }
}