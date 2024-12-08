import Link from "next/link"
import { PropsWithChildren } from "react"

export function Card(props: PropsWithChildren) {
    return (
        <Link href={"#"}>
            <div className="max-w-sm px-4 py-3 bg-card border border-border rounded-md hover:bg-gray-600/10 ">
                {props.children}
            </div>
        </Link>
    )
}

export function CardTitle(props: PropsWithChildren) {
    return (
        <div className="mb-2 text-xl font-bold tracking-tight text-white">
            {props.children}
        </div>
    )
}

export function CardContent(props: PropsWithChildren) {
    return (
        <div className="mb-4 text-base text-card-foreground">
            {props.children}
        </div>
    )
}

export function CardFooter(props: PropsWithChildren) {
    return (
        <div className="w-ful flex gap-2">
            {props.children}
        </div>
    )
}

export function CardMedia(props: { src: string, alt?: string }) {
    return (
        <div className="full p-2">
            <img src={props.src} alt={props.alt} className="w-full " />
        </div>
    )
}