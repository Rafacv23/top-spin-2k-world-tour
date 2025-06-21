/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Admin` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Match` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Player` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Ranking` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Set` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[matchId]` on the table `Set` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `round` on the `Match` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `number` on the `Set` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `year` to the `Tournament` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TournamentRound" AS ENUM ('FIRST_ROUND', 'SECOND_ROUND', 'THIRD_ROUND', 'ROUND_OF_16', 'QUARTER_FINALS', 'SEMI_FINALS', 'FINAL');

-- CreateEnum
CREATE TYPE "SetNumber" AS ENUM ('SET_ONE', 'SET_TWO', 'SET_THREE', 'SET_FOUR', 'SET_FIVE');

-- AlterTable
ALTER TABLE "Match" DROP COLUMN "round",
ADD COLUMN     "round" "TournamentRound" NOT NULL,
ALTER COLUMN "winnerId" DROP NOT NULL,
ALTER COLUMN "updatedAt" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Player" ALTER COLUMN "updatedAt" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Ranking" ALTER COLUMN "updatedAt" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Set" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
DROP COLUMN "number",
ADD COLUMN     "number" "SetNumber" NOT NULL,
ALTER COLUMN "playerOneScore" SET DEFAULT 0,
ALTER COLUMN "playerTwoScore" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "Tournament" ADD COLUMN     "points" INTEGER,
ADD COLUMN     "year" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Admin_id_key" ON "Admin"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Match_id_key" ON "Match"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Player_id_key" ON "Player"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Ranking_id_key" ON "Ranking"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Set_id_key" ON "Set"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Set_matchId_key" ON "Set"("matchId");
