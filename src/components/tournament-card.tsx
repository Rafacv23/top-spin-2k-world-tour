import { Tournament } from "@/lib/types"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"
import { buttonVariants } from "./ui/button"
import Link from "next/link"
import { Badge } from "./ui/badge"

type TournamentCardProps = {
  tournament: Tournament
}
export default function TournamentCard({ tournament }: TournamentCardProps) {
  return (
    <Card>
      <CardHeader>
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
          {tournament.startDate.toString()} | {tournament.endDate.toString()}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex gap-2">
        <Badge variant="outline">{tournament.points} Points</Badge>
        <Badge variant="outline">{tournament.players} Players</Badge>
        <Badge variant="outline">{tournament.surface} Court</Badge>
      </CardContent>
      <CardFooter>
        <Link
          href={`/tournaments/2025/${tournament.id}`}
          title="View Tournament"
          className={buttonVariants({ variant: "default" })}
        >
          Results
        </Link>
      </CardFooter>
    </Card>
  )
}
