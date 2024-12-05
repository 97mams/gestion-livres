-- CreateTable
CREATE TABLE "Books" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "types" TEXT NOT NULL,
    "resume" TEXT NOT NULL,
    "date_publish" TEXT NOT NULL
);
