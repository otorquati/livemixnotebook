/*
  Warnings:

  - You are about to drop the column `playlistId` on the `Editions` table. All the data in the column will be lost.
  - Added the required column `editionId` to the `Playlist` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Editions" DROP CONSTRAINT "Editions_playlistId_fkey";

-- AlterTable
ALTER TABLE "Editions" DROP COLUMN "playlistId";

-- AlterTable
ALTER TABLE "Playlist" ADD COLUMN     "editionId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Playlist" ADD CONSTRAINT "Playlist_editionId_fkey" FOREIGN KEY ("editionId") REFERENCES "Editions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
