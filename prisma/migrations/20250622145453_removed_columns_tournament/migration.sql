/*
  Warnings:

  - You are about to drop the column `players` on the `Tournament` table. All the data in the column will be lost.
  - You are about to drop the column `points` on the `Tournament` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Tournament" DROP COLUMN "players",
DROP COLUMN "points";
