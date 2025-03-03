"use client"

import { Table, TableBody, TableHeader, TableTd, TableTh, TableTr } from "@/src/components/table"
import { useEffect, useRef, useState } from "react"
import { Modal } from "@/src/components/modal"
import useSWR from "swr"

interface user {
    id: string,
    name: string,
    lastName: string,
    email: string,
    tel: string
}

export function ListUser() {
    // const [users, setUsers] = useState<user[]>()
    const title: string[] = ["Nom", "Prénoms", "Mail", "Tel"]
    const url: string = '/api/admin/users'
    const fetcher = (url: string) => fetch(url).then(resp => resp.json())
    const { data, error, isLoading } = useSWR(url, fetcher)

    return (
        <div className="w-full">
            {isLoading ? 'Chargement...' : ''}
            <Table>
                <TableHeader>
                    {title.map((t, k) => (
                        <TableTh key={k}>{t}</TableTh>
                    ))}
                </TableHeader>
                <TableBody>
                    {data?.map((user: any) => (
                        <TableTr key={user.id}>
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
