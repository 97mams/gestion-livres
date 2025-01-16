export function BookCard(props: {
    title?: string,
    image?: string,
    description?: string,
    author: string,
    date?: string,
    bkey?: number
}) {
    return (
        <div className="max-w-60 bg-card shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl" key={props.bkey}>
            <img src={`/uploads/${props.image}`}
                alt="Product" className="h-40 w-72 object-cover rounded-t-xl" />
            <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">{props.author}</span>
                <p className="text-lg font-bold text-forground truncate block capitalize">{props.title}</p>

                <p className="text-sm text-primary">Aimés(100)</p>
            </div>
        </div>
    )
}