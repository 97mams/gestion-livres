"use client";

import { deletedBookAction } from "@/src/lib/book.action";

export function DeletedButton(params: { bookId: number }) {
    const onDelete = async (id: number) => {
        await deletedBookAction(id)
    }

    return (
        <button className="border border-red-400 text-red-400 hover:bg-red-200 text-sm rounded-md p-2" onClick={() => onDelete(params.bookId)}>
            supr
        </button>
    )
}