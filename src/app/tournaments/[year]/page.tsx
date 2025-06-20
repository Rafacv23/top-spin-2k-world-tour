import Container from "@/components/container"
import TournamentsListSkeleton from "@/components/skeletons/tournaments-list-skeleton"
import TournamentsList from "@/components/tournaments-list"
import { Suspense } from "react"

export default async function TournamentsPage({
  params,
}: {
  params: Promise<{ year: string }>
}) {
  const { year } = await params
  const parsedYear = parseInt(year)

  return (
    <Container>
      <h1 className="text-4xl font-bold">Tournaments {year}</h1>
      <p className="mb-6">
        Here you can find a list of all the tournaments that have been played.
        Click on a tournament to view its results.
      </p>
      <div className="flex flex-col gap-8 mt-6">
        <Suspense fallback={<TournamentsListSkeleton />}>
          <TournamentsList year={parsedYear} />
        </Suspense>
      </div>
    </Container>
  )
}
