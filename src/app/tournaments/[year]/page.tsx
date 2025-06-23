import Container from "@/components/container"
import TournamentsListSkeleton from "@/components/skeletons/tournaments-list-skeleton"
import TournamentsList from "@/components/tournaments-list"
import { Suspense } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

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
      <Tabs defaultValue="2025">
        <nav className="w-full">
          <TabsList>
            <TabsTrigger value="2025">
              <Link href={`/tournaments/2025`}>2025</Link>
            </TabsTrigger>
            <TabsTrigger value="2026">
              <Link href={`/tournaments/2026`}>2026</Link>
            </TabsTrigger>
          </TabsList>
        </nav>
        <div className="flex flex-col gap-8 mt-6 w-full">
          <Suspense fallback={<TournamentsListSkeleton />}>
            <TournamentsList year={parsedYear} />
          </Suspense>
        </div>
      </Tabs>
    </Container>
  )
}
