import Container from "@/components/container"
import RankingsTable from "@/components/rankings-table"
import { Suspense } from "react"

export default async function RankingsPage({
  params,
}: {
  params: Promise<{ year: string }>
}) {
  const year = parseInt((await params).year)

  return (
    <Container>
      <header className="space-y-4">
        <h1 className="text-4xl font-bold">
          Live {year} Top Spin 2k World Tour Rankings
        </h1>
        <p className="text-lg">The rankings are updated every day.</p>
      </header>
      <div className="bg-card/30 backdrop-blur-2xl p-4 w-full rounded-lg border border-primary/10">
        <Suspense fallback={<p>Loading...</p>}>
          <RankingsTable year={year} />
        </Suspense>
      </div>
    </Container>
  )
}
