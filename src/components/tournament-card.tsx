import { Tournament } from "@/lib/types"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { format } from "date-fns"

type TournamentCardProps = {
  tournament: Tournament
}
export default function TournamentCard({ tournament }: TournamentCardProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <img
          src={tournament.logo}
          alt={tournament.name}
          className="rounded-lg object-cover mb-4"
          width={200}
          height={64}
          loading="lazy"
        />
        <CardTitle>
          {tournament.name} | {tournament.location}
        </CardTitle>
        <CardDescription className="flex gap-1 mt-4">
          <span>{format(tournament.startDate, "dd-MM")} |</span>
          {format(tournament.endDate, "dd-MM")}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex gap-2">
        {tournament.points && (
          <Badge variant="outline">{tournament.points} Points</Badge>
        )}
        {tournament.players && (
          <Badge variant="outline">{tournament.players} Players</Badge>
        )}
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
