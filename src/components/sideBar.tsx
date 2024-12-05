import Link from "next/link"

export async function SideBar(props: { items: String[] }) {
    return (
        <div className="w-60 border-r px-4 border-r-gray-700 min-h-screen">
            <button className="text-xl w-full mt-8 bg-gray-900 rounded-sm p-2">Genres</button>
            <ul className="w-full flex flex-col gap-2 mt-2 ">
                {
                    props.items.map((item, key) => (
                        <li
                            key={key}
                            className="w-full hover:line-through"
                        >
                            <Link href={""}>{item}</Link>
                        </li>
                    ))
                }
            </ul>
        </div >
    )
}