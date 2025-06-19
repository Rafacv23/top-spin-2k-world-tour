import Container from "@/components/container"
import { buttonVariants } from "@/components/ui/button"
import { ArrowLeft, Calendar, Grid2x2, Users } from "lucide-react"
import Link from "next/link"
import tournaments from "@/lib/mocks/tournaments.json"
import TournamentTabs from "@/components/tournament-tabs"
import { Match } from "@/lib/types"
import matches from "@/lib/mocks/matches.json"

export default async function TournamentDetailsPage({
  params,
}: {
  params: Promise<{ year: string; id: string }>
}) {
  const { year, id } = await params

  const tournament = tournaments.find((t) => t.id === id)
  const tournamentMatches: Match[] = matches.filter(
    (m) => m.tournamentId === id
  )
  return (
    <Container>
      <header>
        <nav className="mb-8">
          <Link
            href={`/tournaments/${year}`}
            className={buttonVariants({ variant: "outline" })}
          >
            <ArrowLeft className="mr-2" size={16} />
            Tournaments
          </Link>
        </nav>
        <img src={tournament?.logo} alt={tournament?.name} className="w-24" />
        <h1 className="text-4xl font-bold my-8">
          {tournament?.name} {year}
        </h1>
      </header>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-card p-4 flex flex-col rounded-lg border w-full">
          <Calendar size={16} />
          <p>15th to 21st of May 2023</p>
        </div>
        <div className="bg-card p-4 flex flex-col  rounded-lg border w-full">
          <Grid2x2 size={16} />
          <p>Grass</p>
        </div>
        <div className="bg-card p-4 flex flex-col rounded-lg border w-full">
          <Users size={16} />
          <p>128 players</p>
        </div>
      </section>
      <section id="results" className="w-full">
        <TournamentTabs matches={tournamentMatches} />
      </section>
    </Container>
  )
}
