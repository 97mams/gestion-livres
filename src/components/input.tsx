import { PropsWithChildren } from "react";

export function Input(props: PropsWithChildren<{
    type?: string,
    name: string,
    id?: string,
    size?: string,
    placeholder?: string,
    className?: string,
    dValue?: string
}>) {
    return (
        <div className="flex flex-col">
            <label htmlFor={props.id} className="text-foregroud font-medium mb-[-3px]">
                {props.children}
            </label>
            <input
                type={props.type ?? "text"}
                name={props.name}
                placeholder={props.placeholder}
                defaultValue={props.dValue}
                className={props.type === "file" ? 'mt-2' : `focus:outline-none border shadow-sm border-border bg-background text-foreground px-3 py-2 rounded-md w-full ${props.className}`}
                required
            />
        </div>
    )
}