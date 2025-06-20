import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table"
import { getRankingByYear } from "@/lib/queries"

type Props = {
  year: number
}

export default async function RankingsTable({ year }: Props) {
  const players = await getRankingByYear(year)

  return (
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
  )
}
