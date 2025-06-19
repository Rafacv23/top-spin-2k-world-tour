import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Tournament, Match } from "./types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function groupByMonth(
  tournaments: Tournament[]
): Record<string, Tournament[]> {
  return tournaments.reduce<Record<string, Tournament[]>>((acc, tournament) => {
    const date = new Date(tournament.startDate)
    const monthYear = date.toLocaleString("default", {
      month: "long",
      year: "numeric",
    })

    if (!acc[monthYear]) acc[monthYear] = []
    acc[monthYear].push(tournament)

    return acc
  }, {})
}

export function groupByRound(matches: Match[]): Record<string, Match[]> {
  return matches.reduce<Record<string, Match[]>>((acc, match) => {
    const round = match.round
    if (!acc[round]) acc[round] = []
    acc[round].push(match)

    return acc
  }, {})
}
