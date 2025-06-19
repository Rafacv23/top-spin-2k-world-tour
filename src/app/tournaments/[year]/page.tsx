import Container from "@/components/container"
import { buttonVariants } from "@/components/ui/button"
import { CardDescription, CardFooter, CardTitle } from "@/components/ui/card"
import tournaments from "@/lib/mocks/tournaments.json"
import { Tournament } from "@/lib/types"
import Link from "next/link"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

function groupByMonth(tournaments: Tournament[]): Record<string, Tournament[]> {
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
            <ul className="flex flex-col gap-4 w-full">
              {tournaments.map((tournament) => (
                <li
                  key={tournament.id}
                  className="flex flex-row justify-between items-center gap-4 bg-card p-4 rounded-lg border"
                >
                  <header className="flex flex-row items-center gap-8">
                    <img
                      src={tournament.logo}
                      alt={tournament.name}
                      className="w-16 h-16 rounded-md object-cover"
                      width={64}
                      height={64}
                    />
                    <CardTitle>
                      {tournament.name} | {tournament.location}
                    </CardTitle>
                    <CardDescription>
                      {tournament.startDate} {tournament.endDate}
                    </CardDescription>
                  </header>
                  <div className="flex flex-col gap-2">
                    <p>Points {tournament.points}</p>
                    <p>Players {tournament.players}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p>Court {tournament.court}</p>
                  </div>
                  <CardFooter>
                    <Link
                      href={`/tournaments/${tournament.id}`}
                      title="View Tournament"
                      className={buttonVariants({ variant: "outline" })}
                    >
                      Results
                    </Link>
                  </CardFooter>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </Container>
  )
}
