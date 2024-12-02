import { PropsWithChildren } from "react";

export function TextArea(props: PropsWithChildren<{
    name: string,
    id?: string,
    className?: string
}>) {
    return (
        <textarea
            name={props.name}
            id={props.id}
            className={`border shadow-sm border-zinc-500 text-zinc-500 px-3 py-2 rounded-md ${props.className}`}
        >
            {props.children}
        </textarea>
    )
}