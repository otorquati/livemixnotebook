/*
  Warnings:

  - You are about to drop the column `songId` on the `Notebook` table. All the data in the column will be lost.
  - You are about to drop the column `songId` on the `Playlist` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Notebook" DROP CONSTRAINT "Notebook_songId_fkey";

-- DropForeignKey
ALTER TABLE "Playlist" DROP CONSTRAINT "Playlist_songId_fkey";

-- DropIndex
DROP INDEX "Notebook_songId_key";

-- DropIndex
DROP INDEX "Playlist_songId_key";

-- AlterTable
ALTER TABLE "Notebook" DROP COLUMN "songId";

-- AlterTable
ALTER TABLE "Playlist" DROP COLUMN "songId";

-- CreateTable
CREATE TABLE "_NotebookToSongs" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_NotebookToSongs_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_PlaylistToSongs" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_PlaylistToSongs_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_NotebookToSongs_B_index" ON "_NotebookToSongs"("B");

-- CreateIndex
CREATE INDEX "_PlaylistToSongs_B_index" ON "_PlaylistToSongs"("B");

-- AddForeignKey
ALTER TABLE "_NotebookToSongs" ADD CONSTRAINT "_NotebookToSongs_A_fkey" FOREIGN KEY ("A") REFERENCES "Notebook"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_NotebookToSongs" ADD CONSTRAINT "_NotebookToSongs_B_fkey" FOREIGN KEY ("B") REFERENCES "Songs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlaylistToSongs" ADD CONSTRAINT "_PlaylistToSongs_A_fkey" FOREIGN KEY ("A") REFERENCES "Playlist"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlaylistToSongs" ADD CONSTRAINT "_PlaylistToSongs_B_fkey" FOREIGN KEY ("B") REFERENCES "Songs"("id") ON DELETE CASCADE ON UPDATE CASCADE;
