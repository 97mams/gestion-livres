import { PropsWithChildren } from "react"

export function Card(props: PropsWithChildren<{
    size: string
}>) {
    return (
        <div className={`h-80 py-3 bg-card border border-border rounded-md hover:bg-gray-600/10 ${props.size}`}>
            {props.children}
        </div>
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
        <div className="w-ful flex flex-col text-sm gap-2 text-accent-foreground">
            {props.children}
        </div>
    )
}

export function CardMedia(props: { src?: string, alt?: string }) {
    return (
        <div className="w-full">
            <img src={props.src} alt={props.alt} className="h-40 w-full object-contain " />
        </div>
    )
}
