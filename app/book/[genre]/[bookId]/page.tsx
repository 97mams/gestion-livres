import { BackButton } from "@/components/backButton";
import { BookCardDetail } from "@/components/bookCardDetail";
import { ListBook } from "@/components/listBook";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function Page(props: {
  params: Promise<{
    bookId: number;
  }>;
}) {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }

  const id = Number((await props.params).bookId);
  const book = await prisma.books.findUnique({
    where: {
      id: id,
    },
  });

  let genre = "";
  if (book) {
    genre = book.types;
  }
  const books = await prisma.books.findMany({
    where: {
      types: genre,
    },
  });
  const bookRender = books.filter((b) => b.id !== book?.id);

  return (
    <div className="p-8 w-full">
      <BackButton />
      <BookCardDetail email={String(session.user?.email)} book={book} />
      <ListBook data={bookRender} title="Même genre" />
    </div>
  );
}
