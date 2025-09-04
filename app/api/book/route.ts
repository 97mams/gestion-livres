import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const books = await prisma.books.findMany({
    select: {
      id: true,
      title: true,
      author: true,
      resume: true,
      types: true,
    },
  });

  console.log("books:", books);

  return NextResponse.json(books, {
    headers: { "Content-Type": "application/json" },
  });
}
