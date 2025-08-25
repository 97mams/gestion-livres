"use client";

import { Books } from "@prisma/client";
import useSWR from "swr";
import { path } from "../lib/pathHelper";

const fetcher = (url: string) => fetch(url).then((resp) => resp.json());

export function EmpruntCurrent({
  userEmail,
}: {
  userEmail: string | null | undefined;
}) {
  const { data, error, isLoading } = useSWR(
    `/api/emprunts?email=${userEmail}`,
    fetcher
  );

  if (error) {
    throw new Error(error);
  }

  return (
    <div className="fixed right-0 top-20">
      {isLoading ? (
        ""
      ) : (
        <div className="min-w-50 mt-8 mx-8">
          <p className="font-medium">Votre livre</p>
          <ul>
            {data?.map((emprunt: { book: Books }) => (
              <li key={emprunt.book.id}>
                <a
                  href={`/book/${path(emprunt.book.types)}/${emprunt.book.id}`}
                  className="hover:underline w-full inline-block no-underline transition-colors hower:text-foreground text-muted-foreground overflow"
                >
                  {emprunt.book.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
