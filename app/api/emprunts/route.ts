import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { userEmail, bookId } = await request.json();

    const user = await prisma.user.findUnique({
      where: { email: userEmail },
    });

    if (!user) {
      return NextResponse.json({ error: "no user matched" }, { status: 404 });
    }

    const book = await prisma.books.findUnique({
      where: { id: bookId },
    });

    if (!book) {
      return NextResponse.json({ error: "no books mached" }, { status: 404 });
    }

    const emprunt = await prisma.emprunts.create({
      data: {
        userId: user.id,
        bookId: book.id,
      },
    });

    return NextResponse.json(emprunt, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userEmail = searchParams.get("email");
    console.log(userEmail);

    if (!userEmail) {
      return NextResponse.json({ error: "error parameters" }, { status: 400 });
    }

    const emprunts = await prisma.emprunts.findMany({
      where: {
        user: {
          email: userEmail,
        },
      },
      include: {
        book: {
          select: {
            id: true,
            title: true,
            types: true,
          },
        },
      },
    });

    return NextResponse.json(emprunts, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
