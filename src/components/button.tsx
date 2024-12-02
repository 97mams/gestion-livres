import { PropsWithChildren } from "react";

export function Button(props: PropsWithChildren<{ type?: string, className?: string }>) {
    return (
        <button className={`border rounded-md px-3 py-2 bg-zinc-950 text-white ${props.className}`}>
            {props.children}
        </button>
    )

}