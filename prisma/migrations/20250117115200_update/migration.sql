/*
  Warnings:

  - You are about to drop the column `editionId` on the `Playlist` table. All the data in the column will be lost.
  - Added the required column `playlistId` to the `Editions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Playlist" DROP CONSTRAINT "Playlist_editionId_fkey";

-- AlterTable
ALTER TABLE "Editions" ADD COLUMN     "playlistId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Playlist" DROP COLUMN "editionId";

-- AddForeignKey
ALTER TABLE "Editions" ADD CONSTRAINT "Editions_playlistId_fkey" FOREIGN KEY ("playlistId") REFERENCES "Playlist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
