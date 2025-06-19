//get all players
export async function getRankingByYear(year: number) {
  const res = await fetch(`/api/rankings/${year}`)
  return res.json()
}
