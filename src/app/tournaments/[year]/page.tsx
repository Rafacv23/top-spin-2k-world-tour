import Container from "@/components/container"
import tournaments from "@/lib/mocks/tournaments.json"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { groupByMonth } from "@/lib/utils"
import TournamentCard from "@/components/tournament-card"

export default async function TournamentsPage({
  params,
}: {
  params: Promise<{ year: string }>
}) {
  const groupedTournaments = groupByMonth(tournaments)

  const year = (await params).year

  return (
    <Container>
      <h1 className="text-4xl font-bold">Tournaments {year}</h1>
      <p className="mb-6">
        Here you can find a list of all the tournaments that have been played.
        Click on a tournament to view its results.
      </p>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Year" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="2025">2025</SelectItem>
          <SelectItem value="2026">2026</SelectItem>
        </SelectContent>
      </Select>
      <div className="flex flex-col gap-8">
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
      </div>
    </Container>
  )
}
