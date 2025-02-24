/*
  Warnings:

  - You are about to drop the column `notebookId` on the `Songs` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Songs" DROP CONSTRAINT "Songs_notebookId_fkey";

-- DropIndex
DROP INDEX "Songs_notebookId_key";

-- AlterTable
ALTER TABLE "Notebook" ADD COLUMN     "songsId" TEXT;

-- AlterTable
ALTER TABLE "Songs" DROP COLUMN "notebookId";

-- AddForeignKey
ALTER TABLE "Notebook" ADD CONSTRAINT "Notebook_songsId_fkey" FOREIGN KEY ("songsId") REFERENCES "Songs"("id") ON DELETE SET NULL ON UPDATE CASCADE;
