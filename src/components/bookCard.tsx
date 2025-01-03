import { Card, CardTitle, CardFooter, CardMedia, CardContent } from "./card";

export function BookCard(props: {
    title?: string,
    image?: string,
    description?: string,
    author: string,
    date?: string
}) {
    return (
        <Card size={"w-50"}>
            <CardTitle>
                <p className="truncate">{props.title}</p>
            </CardTitle>
            <CardContent>
                <CardMedia src={`/uploads/${props.image}`} alt={props.image} />
                {props.description}
            </CardContent>
            <CardFooter>
                <p>"{props.author}"</p>
                <i>{props.date}</i>
            </CardFooter>
        </Card>)
}