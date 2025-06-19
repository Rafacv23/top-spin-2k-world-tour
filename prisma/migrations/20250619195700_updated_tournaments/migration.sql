/*
  Warnings:

  - You are about to drop the column `slug` on the `Tournament` table. All the data in the column will be lost.
  - Made the column `logo` on table `Tournament` required. This step will fail if there are existing NULL values in that column.
  - Changed the type of `surface` on the `Tournament` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "TournamentSurface" AS ENUM ('GRASS', 'CLAY', 'HARD', 'INDOOR');

-- DropIndex
DROP INDEX "Tournament_slug_key";

-- AlterTable
ALTER TABLE "Tournament" DROP COLUMN "slug",
ALTER COLUMN "logo" SET NOT NULL,
DROP COLUMN "surface",
ADD COLUMN     "surface" "TournamentSurface" NOT NULL,
ALTER COLUMN "players" DROP NOT NULL,
ALTER COLUMN "updatedAt" SET DEFAULT CURRENT_TIMESTAMP;
