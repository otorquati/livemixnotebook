/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `Notebook` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[songId]` on the table `Notebook` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[editionId]` on the table `Playlist` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[songId]` on the table `Playlist` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Notebook_userId_key" ON "Notebook"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Notebook_songId_key" ON "Notebook"("songId");

-- CreateIndex
CREATE UNIQUE INDEX "Playlist_editionId_key" ON "Playlist"("editionId");

-- CreateIndex
CREATE UNIQUE INDEX "Playlist_songId_key" ON "Playlist"("songId");
