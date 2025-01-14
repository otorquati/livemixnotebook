-- AddForeignKey
ALTER TABLE "Playlist" ADD CONSTRAINT "Playlist_songId_fkey" FOREIGN KEY ("songId") REFERENCES "Songs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
