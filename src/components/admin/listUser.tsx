"use client"

import { Table, TableBody, TableHeader, TableTd, TableTh, TableTr } from "@/src/components/table"
import { useEffect, useState } from "react"
import { Modal } from "@/src/components/modal"

interface user {
    id: string,
    name: string,
    lastName: string,
    email: string,
    tel: string
}

export function ListUser() {
    const [users, setUsers] = useState<user[]>()
    const title: string[] = ["id", "Nom", "Prénoms", "Mail", "Tel"]

    useEffect(() => {
        fetch('http://127.0.0.1:3000/api/admin/users')
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
                            <TableTd>{user.name}</TableTd>
                            <TableTd>{user.lastName}</TableTd>
                            <TableTd>{user.email}</TableTd>
                            <TableTd>
                                <div className="w-full flex justify-between">
                                    {user.tel}
                                    <Modal id={user.id} />
                                </div>
                            </TableTd>
                        </TableTr>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
