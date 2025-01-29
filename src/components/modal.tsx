"use client";

import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useEffect, useRef, useState } from "react"
import { deletedUserAction, updateUserAction } from '../lib/user.action';
import { redirect } from 'next/navigation';

export function Modal(props: { id: string }) {
    const [showAction, setShowAction] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const ref = useRef<HTMLButtonElement>(null)
    useEffect(() => {
        const handleOutClick = (e: MouseEvent) => {
            if (!ref.current?.contains(e.target as Node)) {
                setShowAction(false)
            }
        }

        window.addEventListener('click', handleOutClick)

        return () => { window.removeEventListener('click', handleOutClick) }
    }, [ref])
    const onDeleteUser = () => {
        setShowModal(!showModal)
        setShowAction(!showAction)
    }

    const onCancel = () => {
        setShowModal(!showModal)
    }

    const isConfirm = () => {
        deletedUserAction(props.id)
        setShowModal(!showModal)
    }

    const onUpdated = () => {
        redirect(`/admin/users/update/${props.id}`)
    }

    const onDetail = () => {
        redirect(`/admin/users/${props.id}`)
    }

    return (
        <div>
            <button ref={ref} onClick={() => { setShowAction(!showAction) }}>
                <MoreVertIcon />
            </button>
            {
                showAction ? <div className='w-24 rounded-[5px] flex flex-col items-start border bg-foreground text-card border-border absolute'>
                    <p onClick={onDeleteUser} className=' p-1 cursor-pointer w-full hover:bg-card hover:text-foreground text-start px-2'>Suprimer</p>
                    <p onClick={onDetail} className='p-1 w-full  hover:bg-card hover:text-foreground cursor-pointer text-start px-2'>Detail</p>
                    <p onClick={onUpdated} className='p-1 cursor-pointer w-full  hover:bg-card hover:text-foreground text-start px-2'>Modifier</p>
                </div> : ""
            } {
                showModal ? <div id="static-modal" data-modal-backdrop="static" tabIndex={-1} aria-hidden="true" className="flex overflow-y-auto bg-white/15 overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full" >
                    <div className="relative p-4 w-full flex items-center max-w-80 max-h-full">
                        <div className="relative rounded-xl shadow bg-gray-700">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-600">
                                <h3 className="text-xl font-semibold text-white">
                                    Confirmer !
                                </h3>
                            </div>
                            <div className="flex items-center p-4 md:p-5 border-t rounded-b border-gray-600">
                                <button onClick={isConfirm} data-modal-hide="static-modal" type="button" className="text-red-800 px-4 py-2 rounded bg-red-500 hover:bg-red-800 hover:text-white focus:ring-1 focus:outline-none focus:ring-red-300">suprimer</button>
                                <button onClick={onCancel} data-modal-hide="static-modal" type="button" className="py-2 px-4 ms-3  font-medium text-gray-900 focus:outline-none bg-white rounded hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-1 focus:ring-gray-100">Annuler</button>
                            </div>
                        </div>
                    </div>
                </div > : ""
            }
        </div >
    )
}