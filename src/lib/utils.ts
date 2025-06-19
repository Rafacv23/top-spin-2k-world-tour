import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Match, Tournament } from "./types"

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

export function whoWinsTheSet(
  p1: number | null | undefined,
  p2: number | null | undefined
): "p1" | "p2" | "tie" {
  if (p1 == null || p2 == null) return "tie"
  if (p1 > p2) return "p1"
  if (p1 < p2) return "p2"
  return "tie"
}
