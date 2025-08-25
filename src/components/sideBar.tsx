"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { path } from "../lib/pathHelper";

export function SideBar(props: { items: string[] }) {
  const pathname: string = usePathname();
  const active: string = "bg-accent";
  const chechItem = (item: string) => {
    const text = item.split(" ");
    return text[0];
  };

  return (
    <div className=" fixed pr-20 top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-lg shrink-0 md:sticky md:block">
      <div className="w-52 pl-4 pt-12">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          Genres
        </h4>
        <div className="grid grid-flow-row auto-rows-max gap-0.5 text-sm pr-3 h-[calc(100vh-8rem)] pb-2 overflow-auto">
          {props.items.map((item, key) => (
            <Link
              href={`/book/lists/${path(item)}`}
              key={key}
              className={`
                            group relative flex h-8 w-full items-center rounded-lg px-2 hover:bg-accent font-normal text-foreground
                            ${
                              pathname.includes(chechItem(item)) ? active : ""
                            }`}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
