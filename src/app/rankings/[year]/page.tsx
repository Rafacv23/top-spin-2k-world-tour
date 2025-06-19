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
import players from "@/lib/mocks/players.json"

export default async function RankingsPage({
  params,
}: {
  params: { year: string }
}) {
  const year = parseInt(params.year)

  // TODO fetch real rankings

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
            {players.map((player, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{index + 1}</TableCell>
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
