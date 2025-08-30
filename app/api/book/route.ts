import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export default async function GET({
  Response,
  Request,
}: {
  Response: NextResponse;
  Request: NextRequest;
}) {
  const books = await prisma.books.findMany({
    select: {
      id: true,
      title: true,
      author: true,
      resume: true,
      types: true,
    },
  });

  return NextResponse.json(books);
}
