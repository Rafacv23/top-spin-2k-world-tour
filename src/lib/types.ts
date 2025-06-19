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

export type Match = {
  id: string
  tournamentId: string
  date: string
  playerOne: string
  playerTwo: string
  round: string
  results: {
    firstSet: [number, number]
    secondSet: [number, number]
    thirdSet?: [number, number]
    fourthSet?: [number, number]
    fiveSet?: [number, number]
  }
}
