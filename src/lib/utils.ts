import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Match, Set, Tournament } from "@prisma/client"

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

export function groupByRound(matches: (Match & { sets: Set[] })[]) {
  return matches.reduce<Record<string, (Match & { sets: Set[] })[]>>(
    (acc, match) => {
      const round = match.round
      if (!acc[round]) acc[round] = []
      acc[round].push(match)
      return acc
    },
    {}
  )
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

export function formatRoundLabel(round: string): string {
  return round
    .toLowerCase() // "first_round"
    .split("_") // ["first", "round"]
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // ["First", "Round"]
    .join(" ") // "First Round"
}
