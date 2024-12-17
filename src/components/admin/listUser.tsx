"use client";

import MoreVertIcon from '@mui/icons-material/MoreVert';
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
    const [openModal, setOpenModal] = useState(false)
    const [users, setUsers] = useState<member[]>()
    const title: string[] = ["id", "Nom", "Prénoms", "Mail", "Tel"]

    useEffect(() => {
        fetch('http://127.0.0.1:3000/api/admin/members')
            .then((res) => res.json())
            .then((data) => {
                setUsers(data.members)
            })
    }, [])


    const handelModale = () => {
        setOpenModal(true)
        alert(openModal)
    }

    const handelCloseModal = () => {
        setOpenModal(false)
    }

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
                            <TableTd>
                                <div className="w-full flex justify-between">
                                    {user.contact}
                                    <ButtonAction id={user.id} />
                                </div>
                            </TableTd>
                        </TableTr>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

function ButtonAction(props: { id: number }) {
    const [showAction, setShowAction] = useState(false);
    const onDeleteUser = () => {

    }
    return (
        <div>
            <button onClick={() => { setShowAction(!showAction) }}>
                <MoreVertIcon />
            </button>
            {showAction ? <div className='w-24 py-2 flex flex-col items-start border bg-slate-500 border-border absolute right-32 z-50'>
                <p className='w-full hover:bg-primary text-start px-2'>Suprimer</bu>
                <p className='w-full hover:bg-primary text-start px-2'>Detail</p>
                <p className='w-full hover:bg-primary text-start px-2'>Modifier</p>
            </div> : ""}
        </div>)
}