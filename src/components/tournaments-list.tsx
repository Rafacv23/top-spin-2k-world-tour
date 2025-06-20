import { Tournament } from "@/lib/types" // assuming your Tournament type is here
import { groupByMonth } from "@/lib/utils"
import TournamentCard from "@/components/tournament-card"
import Container from "@/components/container"
import { getTournamentsByYear } from "@/lib/queries"

type Props = {
  year: number
}

export default async function TournamentsList({ year }: Props) {
  const response = await getTournamentsByYear(year)

  if (response.status !== 200 || !response.data) {
    return (
      <Container>
        <h1 className="text-4xl font-bold">Tournaments {year}</h1>
        <p className="text-red-500">Failed to load tournaments for {year}.</p>
      </Container>
    )
  }

  const tournaments = response.data.map((tournament) => ({
    ...tournament,
    year: year,
  })) as Tournament[]
  const groupedTournaments = groupByMonth(tournaments)

  return (
    <>
      {Object.entries(groupedTournaments).map(([month, tournaments]) => (
        <section key={month}>
          <h2 className="text-2xl font-semibold mb-4">
            {month.charAt(0).toUpperCase() + month.slice(1)}
          </h2>
          <ul className="grid grid-cols-1 gap-4">
            {tournaments.map((tournament) => (
              <li key={tournament.id} className="w-full">
                <TournamentCard tournament={tournament} />
              </li>
            ))}
          </ul>
        </section>
      ))}
    </>
  )
}
