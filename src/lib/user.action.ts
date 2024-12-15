"use server";

import { prisma } from '@/src/lib/prisma'

export async function CreateUserAction(formData: FormData) {
    const data = {
        firstName: String(formData.get('firstName')),
        lastName: String(formData.get('lastName')),
        email: String(formData.get('mail')),
        contact: Number(formData.get('contact')),
    }

    const member = await prisma.members.create({
        data
    })

    console.log(member)

}