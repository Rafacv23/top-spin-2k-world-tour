/*
  Warnings:

  - A unique constraint covering the columns `[discord]` on the table `Player` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id2k]` on the table `Player` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `role` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `discord` to the `Player` table without a default value. This is not possible if the table is not empty.
  - Added the required column `experience` to the `Player` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id2k` to the `Player` table without a default value. This is not possible if the table is not empty.
  - Added the required column `platform` to the `Player` table without a default value. This is not possible if the table is not empty.
  - Added the required column `playerChoice` to the `Player` table without a default value. This is not possible if the table is not empty.
  - Added the required column `policy` to the `Player` table without a default value. This is not possible if the table is not empty.
  - Made the column `country` on table `Player` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "Platforms" AS ENUM ('PC', 'PS5', 'Xbox');

-- CreateEnum
CREATE TYPE "AvailabilityDays" AS ENUM ('MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY');

-- CreateEnum
CREATE TYPE "TypePlayer" AS ENUM ('REAL_PLAYER', 'MYPLAYER');

-- CreateEnum
CREATE TYPE "Roles" AS ENUM ('ADMIN', 'TOURNAMENT_ORGANIZER', 'REFEREE');

-- AlterTable
ALTER TABLE "Admin" ADD COLUMN     "role" "Roles" NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Player" ADD COLUMN     "availability" "AvailabilityDays"[],
ADD COLUMN     "discord" TEXT NOT NULL,
ADD COLUMN     "experience" BOOLEAN NOT NULL,
ADD COLUMN     "id2k" TEXT NOT NULL,
ADD COLUMN     "platform" "Platforms" NOT NULL,
ADD COLUMN     "playerChoice" "TypePlayer" NOT NULL,
ADD COLUMN     "policy" BOOLEAN NOT NULL,
ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "country" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Player_discord_key" ON "Player"("discord");

-- CreateIndex
CREATE UNIQUE INDEX "Player_id2k_key" ON "Player"("id2k");
