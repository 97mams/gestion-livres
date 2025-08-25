import { prisma } from "@/src/lib/prisma";
import { ListBook } from "@/src/components/listBook";
import { BackButton } from "@/src/components/backButton";

export default async function Page(props: {
  params: Promise<{
    genre: string;
  }>;
}) {
  const genreParams = (await props.params).genre;
  let genre = genreParams;
  if (genreParams.includes("_")) {
    const genreArray = genreParams.split("_");
    genre = genreArray[0] + " " + genreArray[1];
  }
  const bookByGenre = await prisma.books.findMany({
    where: {
      types: genre,
    },
  });

  return (
    <div>
      <BackButton />
      <ListBook data={bookByGenre} title={genre} />
    </div>
  );
}
