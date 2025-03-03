"use client"

import { useEffect, useState } from "react";
import { FormEmprunt } from "./form";
import { checkedUserWithBook } from "../lib/book.action";
import { deleteEmpruntAction } from "../lib/emprunte.action";
import { getSession } from "next-auth/react";

type bookType = {
    title: string;
    id: number;
    author: string;
    types: string;
    resume: string;
    upvotes: number;
    mockupImages: string;
    date_publish: string;
    createdAt: Date;
    updatedAt: Date;
}

export function BookCardDetail(
    {
        book, email
    }: {
        book: bookType | null, email: string
    }) {



    return (
        <div
            className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-border bg-card">
            <div className="w-full md:w-1/3 grid place-items-center">
                <img src={`/uploads/${book?.mockupImages}`} alt={book?.mockupImages} className="rounded-xl" />
            </div>
            <div className="w-full md:w-2/3 flex flex-col space-y-2 p-3">
                <div className="flex justify-between item-center">
                    <p className="text-gray-500 font-medium hidden md:block">{book?.author}</p>
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <p className="text-gray-600 font-bold text-sm ml-1">
                            <span className="text-gray-500 font-normal">(76 reviews)</span>
                        </p>
                    </div>
                    <div className="">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500" viewBox="0 0 20 20" fill="currentColor">
                            <path
                                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                            />
                        </svg>
                    </div>
                </div>
                <h3 className="font-black text-forground md:text-3xl text-xl">{book?.title}</h3>
                <p className="md:text-lg text-gray-500 text-base">{book?.resume}</p>
                <div>
                    <ButtonEmprunte
                        bookId={book?.id}
                        email={email}
                    />
                </div>
            </div>
        </div>
    )
}

const ButtonEmprunte = ({ bookId, email }: { bookId: number | undefined, email: string }) => {
    const [showCardConfirm, setCardConfirm] = useState(false)
    const [changedButton, setChangedButton] = useState<boolean>()
    console.log(changedButton);


    useEffect(() => {
        const fetch = async () => {
            const session = await getSession()
            const e = session?.user?.email
            if (e) {
                const bookEmprunted = await checkedUserWithBook(bookId, e)
                setChangedButton(bookEmprunted)
            }
        };
        fetch()
    }, [changedButton]);

    const handlerDelete = async () => {
        if (bookId) {
            await deleteEmpruntAction(email, bookId)
            setChangedButton(!changedButton)
        }
    }

    const handleState = (state: boolean) => {
        setChangedButton(state)
    }

    const canceledCard = () => {
        setCardConfirm(!showCardConfirm)
    }
    return (
        <div>
            {showCardConfirm ?
                <div className="w-72 pt-2 bg-card border border-border rounded-[8px] absolute bottom-5">
                    <div className="w-full flex justify-end px-2">
                        <button
                            onClick={canceledCard}
                            className="px-4  py-2 border border-border rounded-[8px] hover:bg-primary/20 text-sm"
                        >
                            X
                        </button>
                    </div>
                    <div className="px-4 py-2 flex flex-col gap-4">
                        <p>
                            Ajouter la date de retour
                        </p>
                        <FormEmprunt
                            onclick={canceledCard}
                            onStatus={handleState}
                            userEmail={email}
                            bookId={bookId}
                        />
                    </div>
                </div>
                : ''}
            <div>
                {
                    changedButton ?
                        <button
                            onClick={handlerDelete}
                            className="px-3 py-2 border border-secondary rounded text-secondary hover:bg-foreground/20">
                            annuler
                        </button>
                        :
                        <button
                            onClick={canceledCard}
                            className="px-3 py-2 border border-secondary rounded text-secondary hover:bg-foreground/20">
                            prendre
                        </button>
                }
            </div>
        </div>
    )
}