/*
  Warnings:

  - You are about to drop the `Editons` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Playlist" DROP CONSTRAINT "Playlist_editionId_fkey";

-- DropTable
DROP TABLE "Editons";

-- CreateTable
CREATE TABLE "Editions" (
    "id" TEXT NOT NULL,
    "editionId" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "upadtedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Editions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Playlist" ADD CONSTRAINT "Playlist_editionId_fkey" FOREIGN KEY ("editionId") REFERENCES "Editions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
