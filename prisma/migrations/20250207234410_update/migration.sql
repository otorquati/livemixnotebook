/*
  Warnings:

  - You are about to drop the column `emailVerified` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the `_NotebookToSongs` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_PlaylistToSongs` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[notebookId]` on the table `Songs` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `songsId` to the `Playlist` table without a default value. This is not possible if the table is not empty.
  - Added the required column `notebookId` to the `Songs` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_NotebookToSongs" DROP CONSTRAINT "_NotebookToSongs_A_fkey";

-- DropForeignKey
ALTER TABLE "_NotebookToSongs" DROP CONSTRAINT "_NotebookToSongs_B_fkey";

-- DropForeignKey
ALTER TABLE "_PlaylistToSongs" DROP CONSTRAINT "_PlaylistToSongs_A_fkey";

-- DropForeignKey
ALTER TABLE "_PlaylistToSongs" DROP CONSTRAINT "_PlaylistToSongs_B_fkey";

-- AlterTable
ALTER TABLE "Playlist" ADD COLUMN     "songsId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Songs" ADD COLUMN     "notebookId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "emailVerified";

-- DropTable
DROP TABLE "_NotebookToSongs";

-- DropTable
DROP TABLE "_PlaylistToSongs";

-- CreateIndex
CREATE UNIQUE INDEX "Songs_notebookId_key" ON "Songs"("notebookId");

-- AddForeignKey
ALTER TABLE "Songs" ADD CONSTRAINT "Songs_notebookId_fkey" FOREIGN KEY ("notebookId") REFERENCES "Notebook"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Playlist" ADD CONSTRAINT "Playlist_songsId_fkey" FOREIGN KEY ("songsId") REFERENCES "Songs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
