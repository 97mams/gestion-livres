import { Card, CardTitle, CardMedia, CardContent } from "./card";

export function BookCard() {
    return (
        <Card>
            <CardTitle>
                <h1>Titre</h1>
            </CardTitle>
            <CardContent>
                <CardMedia src="/kingMakers.jpg" alt="kingMakers" />
                Placeat aliquam ipsa sit praesentium
            </CardContent>

        </Card>)
}