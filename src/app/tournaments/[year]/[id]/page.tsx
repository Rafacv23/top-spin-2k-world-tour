import Container from "@/components/container"
import { buttonVariants } from "@/components/ui/button"
import { ArrowLeft, Calendar, Grid2x2, Users } from "lucide-react"
import Link from "next/link"
import TournamentTabs from "@/components/tournament-tabs"
import { getTournamentById } from "@/lib/queries"

export default async function TournamentDetailsPage({
  params,
}: {
  params: Promise<{ year: string; id: string }>
}) {
  const { year, id } = await params

  const tournament = await getTournamentById(id).then((res) => res.data)

  if (!tournament) {
    return (
      <Container>
        <h1 className="text-4xl font-bold">Tournament {year}</h1>
        <p className="w-full bg-card p-8 rounded-lg border mt-8">
          Failed to load tournament.
        </p>
      </Container>
    )
  }

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
        <h1 className="text-4xl font-bold my-8">
          {tournament?.name} {year}
        </h1>
        <img
          src={tournament?.logo}
          alt={tournament?.name}
          className="rounded-lg w-full h-64 object-cover mb-4"
        />
      </header>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-card p-4 flex flex-col rounded-lg border w-full">
          <Calendar size={16} />
          <p>
            From {tournament?.startDate.toLocaleDateString()} to{" "}
            {tournament?.endDate.toLocaleDateString()}
          </p>
        </div>
        <div className="bg-card p-4 flex flex-col  rounded-lg border w-full">
          <Grid2x2 size={16} />
          <p>{tournament?.surface} surface</p>
        </div>
        {tournament.players && (
          <div className="bg-card p-4 flex flex-col rounded-lg border w-full">
            <Users size={16} />
            <p>128 players</p>
          </div>
        )}
      </section>
      {tournament.matches.length <= 0 ? (
        <section
          id="results"
          className="w-full bg-card p-8 rounded-lg border mt-8"
        >
          <p>No order of play yet. Come back later.</p>
        </section>
      ) : (
        <section id="results" className="w-full">
          <TournamentTabs matches={tournament.matches} />
        </section>
      )}
    </Container>
  )
}
