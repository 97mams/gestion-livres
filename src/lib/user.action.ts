"use server";

import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation';
import bcryptjs from 'bcryptjs';

export async function CreateUserAction(formData: FormData) {
    const salt = bcryptjs.genSaltSync(10)
    const data = {
        name: String(formData.get('firstName')),
        lastName: String(formData.get('lastName')),
        tel: String(formData.get('contact')),
        email: String(formData.get('mail')),
        password: bcryptjs.hashSync(String(formData.get('pwd')), salt),
    }

    const user = await prisma.user.create({
        data: data
    })

    if (user) {
        return true
    }
    return false

}

export async function deletedUserAction(id: string) {

    const deleted = await prisma.user.delete({
        where: {
            id
        }
    })

    if (deleted) {
        redirect('/admin/users/lists')
    } else {
        throw new Error("deleted user faild")
    }

}

export async function updateUserAction(id: string, formData: FormData) {

    if (id) {
        const data = {
            name: String(formData.get('firstName')),
            lastName: String(formData.get('lastName')),
            tel: String(formData.get('contact')),
            email: String(formData.get('mail')),
        }
        const user = await prisma.user.update({
            data: data,
            where: {
                id: id
            }
        })

        if (user) return true
        return false
    }
} 