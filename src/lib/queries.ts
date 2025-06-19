import { PrismaClient } from "@prisma/client"
import { redirect } from "next/navigation"

const prisma = new PrismaClient()

//get all players
export async function getRankingByYear(year: number) {
  const currentYear = new Date().getFullYear()

  if (!year) {
    redirect(`/rankings/${currentYear}`)
  }

  try {
    const rankings = await prisma.ranking.findMany({
      where: { year },
      orderBy: { points: "desc" },
      include: {
        player: {
          select: {
            id2k: true,
            country: true,
          },
        },
      },
    })

    return {
      status: 200,
      message: "Successfully retrieved rankings",
      data: rankings.map((rank, index) => ({
        name: rank.player.id2k,
        country: rank.player.country,
        position: index + 1, // 🏅 1-based position
        points: rank.points,
        tournaments: rank.tournaments,
      })),
    }
  } catch (error) {
    return {
      status: 500,
      message: "Error retrieving rankings",
      error: error instanceof Error ? error.message : error,
    }
  }
}
