-- CreateTable
CREATE TABLE "Members" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false
);

-- CreateTable
CREATE TABLE "Emprunts" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "bookId" INTEGER NOT NULL,
    "membreId" INTEGER NOT NULL,
    CONSTRAINT "Emprunts_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Books" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Emprunts_membreId_fkey" FOREIGN KEY ("membreId") REFERENCES "Members" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
