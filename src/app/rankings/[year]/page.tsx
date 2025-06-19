import Container from "@/components/container"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { getRankingByYear } from "@/lib/queries"

export default async function RankingsPage({
  params,
}: {
  params: { year: string }
}) {
  const year = await parseInt(params.year)

  const players = await getRankingByYear(year)

  console.log(players)

  return (
    <Container>
      <header className="space-y-4">
        <h1 className="text-4xl font-bold">
          Live {year} Top Spin 2k World Tour Rankings
        </h1>
        <p className="text-lg">The rankings are updated every day.</p>
      </header>
      <div className="bg-card/30 backdrop-blur-2xl p-4 w-full rounded-lg border border-primary/10">
        <Table>
          <TableCaption>Full Top Spin 2k World Tour Rankings</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Rank</TableHead>
              <TableHead>Player</TableHead>
              <TableHead>Country</TableHead>
              <TableHead>Tournaments</TableHead>
              <TableHead className="text-right">Points</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {players.data?.map((player) => (
              <TableRow key={player.name}>
                <TableCell className="font-medium">{player.position}</TableCell>
                <TableCell>{player.name}</TableCell>
                <TableCell>{player.country}</TableCell>
                <TableCell>{player.tournaments}</TableCell>
                <TableCell className="text-right">{player.points}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Container>
  )
}
