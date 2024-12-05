import { PropsWithChildren } from "react"

export function Card(props: PropsWithChildren) {
    return (
        <div className="max-w-sm p-6 bg-gray-800 border border-gray-700 shadow-lg rounded-lg ">
            {props.children}
        </div>
    )
}

export function CardTitle(props: PropsWithChildren) {
    return (
        <div className="mb-2 text-2xl font-bold tracking-tight text-white">
            {props.children}
        </div>
    )
}

export function CardContent(props: PropsWithChildren) {
    return (
        <div className="mb-3 font-normal text-gray-400">
            {props.children}
        </div>
    )
}