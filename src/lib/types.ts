import { TournamentSurface } from "@prisma/client"

export type Tournament = {
  id: string
  logo: string
  name: string
  location: string
  startDate: Date
  endDate: Date
  year: number
  surface: TournamentSurface
}

type Set = {
  number: number
  playerOneScore: number
  playerTwoScore: number
}

export type Match = {
  id: string
  date: string
  round: string
  playerOne: string
  playerTwo: string
  sets: Set[]
}
