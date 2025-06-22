import { Match, PrismaClient, Tournament, Set } from "@prisma/client"
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

//get tournaments by year
export async function getTournamentsByYear(year: number) {
  const currentYear = new Date().getFullYear()

  if (!year) {
    redirect(`/tournaments/${currentYear}`)
  }

  try {
    const tournaments = await prisma.tournament.findMany({
      where: { year },
      orderBy: { startDate: "asc" },
      select: {
        id: true,
        name: true,
        startDate: true,
        endDate: true,
        location: true,
        logo: true,
        year: true,
        surface: true,
        sets: true,
      },
    })

    if (!tournaments || tournaments.length === 0) {
      return {
        status: 404,
        message: "No tournaments found for the specified year",
      }
    }

    return {
      status: 200,
      message: "Successfully retrieved tournaments",
      data: tournaments,
    }
  } catch (error) {
    return {
      status: 500,
      message: "Error retrieving tournaments",
      error: error instanceof Error ? error.message : error,
    }
  }
}


interface TournamentWithMatchesResponse {
  status: number
  message: string
data?: Tournament & { matches: (Match & { sets: Set[] })[] }
  error?: string
}

export async function getTournamentById(id: string): Promise<TournamentWithMatchesResponse> {

  if (!id) {
    return {
      status: 400,
      message: "Tournament ID is required",
    }
  }

  try {
    const tournament = await prisma.tournament.findUnique({
      where: { id },
      include: {
        matches: {
          include: {
            sets: true,
          }
        },
      }
    })

    if (!tournament) {
      return {
        status: 404,
        message: "No tournament found with the specified id",
      }
    }

    return {
      status: 200,
      message: "Successfully retrieved tournament",
      data: tournament,
    }
  } catch (error) {
    return {
      status: 500,
      message: "Error retrieving tournament",
      error: error instanceof Error ? error.message : String(error),
    }
  }
}

export async function getTournamentMatchesById(id: string) {
  if (!id) {
    return {
      status: 400,
      message: "Tournament ID is required",
    }
  }

  try {
    const matches = await prisma.match.findMany({
      where: { tournamentId: id },
    })

    if (!matches || matches.length === 0) {
      return {
        status: 404,
        message: "No matches found for the specified tournament",
      }
    }

    return {
      status: 200,
      message: "Successfully retrieved tournament matches",
      data: matches,
    }
  } catch (error) {
    return {
      status: 500,
      message: "Error retrieving tournament matches",
      error: error instanceof Error ? error.message : String(error),
    }
  }
}