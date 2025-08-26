"use client";

import { path } from "@/lib/pathHelper";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SidebarAdmin() {
  const pathname: string = usePathname();
  const active: string = "bg-accent";
  const items = [
    { fr: "Utilisateurs", en: "users" },
    { fr: "Livres", en: "book" },
  ];

  return (
    <div className=" fixed pr-20 top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-lg shrink-0 md:sticky md:block">
      <div className="w-52 pl-4">
        <div className="grid grid-flow-row auto-rows-max gap-0.5 text-sm pr-3 h-[calc(100vh-8rem)] pb-2 overflow-auto">
          {items.map((item, key) => (
            <Link
              href={`/admin/${path(item.en)}`}
              key={key}
              className={`
                            group relative flex h-8 w-full items-center rounded-lg px-2 hover:bg-accent scroll-m-20 text-xl font-semibold tracking-tight text-foreground
                            ${pathname.includes(item.en) ? active : ""}`}
            >
              {item.fr}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
