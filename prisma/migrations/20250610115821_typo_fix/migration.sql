/*
  Warnings:

  - You are about to drop the column `genre` on the `Book` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Book" DROP COLUMN "genre",
ADD COLUMN     "genres" TEXT[];
