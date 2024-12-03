import { PropsWithChildren } from "react"

export function Card(props: PropsWithChildren) {
    return (
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {props.children}
        </div>
    )
}

export function CardTitle(props: PropsWithChildren) {
    return (
        <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.children}
        </div>
    )
}

export function CardContent(props: PropsWithChildren) {
    return (
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {props.children}
        </p>
    )
}