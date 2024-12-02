import { PropsWithChildren } from "react";

export function Input(props: PropsWithChildren<{
    type: string,
    name: string,
    id?: string,
    size?: string,
    placeholder?: string,
    className?: string,
    dValue?: string
}>) {
    return (
        <div className="flex flex-col">
            <label htmlFor={props.id} className="text-zinc-950 font-medium mb-[-3px]">
                {props.children}
            </label>
            <input
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}
                defaultValue={props.dValue}
                className={`border shadow-sm border-zinc-500 text-zinc-500 px-3 py-2 rounded-md ${props.className}`}
            />
        </div>
    )
}