"use client";

import { Table, TableBody, TableHeader, TableTd, TableTh, TableTr } from "@/src/components/table"
import { useEffect, useState } from "react"

interface member {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    contact: string
}

export function ListUser() {
    const [users, setUsers] = useState<member[]>()
    const title: string[] = ["id", "Nom", "Prénoms", "Mail", "Tel"]

    useEffect(() => {
        fetch('http://127.0.0.1:3000/api/admin/members')
            .then((res) => res.json())
            .then((data) => {
                setUsers(data.members)
            })
    }, [])


    return (
        <div className="w-full">
            <Table>
                <TableHeader>
                    {title.map((t, k) => (
                        <TableTh key={k}>{t}</TableTh>
                    ))}
                </TableHeader>
                <TableBody>
                    {users?.map(user => (
                        <TableTr key={user.id}>
                            <TableTd>{user.id}</TableTd>
                            <TableTd>{user.firstName}</TableTd>
                            <TableTd>{user.lastName}</TableTd>
                            <TableTd>{user.email}</TableTd>
                            <TableTd>{user.contact}</TableTd>
                        </TableTr>
                    ))}
                </TableBody>
            </Table>
        </div >
    )
}