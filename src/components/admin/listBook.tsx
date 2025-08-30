"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MinusIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";

type book = { id: number; title: string; author: string; types: string };

export function ListBook() {
  const title: string[] = ["Titres", "Genres", "Auteur", "Action"];
  const [isBook, setIsBooks] = useState<[book]>([]);

  fetch("/api/book").then((json) => console.log("books", json));

  const countBooks = isBook?.length;

  return (
    <div className="w-full">
      <Table>
        <TableCaption>Liste des utilisateurs.</TableCaption>
        <TableHeader>
          <TableRow>
            {title.map((item) => (
              <TableHead key={item} className="w-full">
                {item}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {books?.map((book) => (
            <TableRow key={book.id}>
              <TableCell className="font-medium">{book.title}</TableCell>
              <TableCell>{book.types}</TableCell>
              <TableCell>{book.author}</TableCell>
              <TableCell>
                <Button
                  variant={"ghost"}
                  size={"sm"}
                  className="text-red-400 hover:text-red-600"
                  onClick={hadleDelete}
                >
                  <MinusIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell className="font-medium">Total livres</TableCell>
            <TableCell className="text-right">{countBooks}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
