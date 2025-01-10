"use server";

import { prisma } from '@/src/lib/prisma'
import { redirect } from 'next/navigation';
import bcryptjs from 'bcryptjs';

export async function CreateUserAction(formData: FormData) {
    const salt = bcryptjs.genSaltSync(10)
    const data = {
        firstName: String(formData.get('firstName')),
        lastName: String(formData.get('lastName')),
        email: String(formData.get('mail')),
        contact: String(formData.get('contact')),
        password: bcryptjs.hashSync(String(formData.get('pwd')), salt),
    }

    const member = await prisma.members.create({
        data: data
    })

    if (member) {
        redirect("/admin/users/new")
    }
    throw new Error("user add fail")

}

export async function deletedUserAction(id: number) {

    const deleted = await prisma.members.delete({
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

export async function updateUserAction(id: number, formData: FormData) {

    if (id) {
        const data = {
            firstName: String(formData.get('firstName')),
            lastName: String(formData.get('lastName')),
            email: String(formData.get('mail')),
            contact: String(formData.get('contact')),
        }
        const member = await prisma.members.update({
            data: data,
            where: {
                id: id
            }
        })

        if (member) {
            redirect('/admin/users/lists')
        } else {
            throw new Error('updated faild')
        }
    }
} 