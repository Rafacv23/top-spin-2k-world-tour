export type Tournament = {
  id: string
  logo: string
  name: string
  location: string
  startDate: string
  endDate: string
  court: string
  points: number
  players: number
}

type Set = {
  number: number
  playerOneScore: number
  playerTwoScore: number
}

export type Match = {
  id: string
  date: string
  playerOne: string
  playerTwo: string
  sets: Set[]
}
