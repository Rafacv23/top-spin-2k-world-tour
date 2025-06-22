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
import { Tv, UserPlus } from "lucide-react"
import { DISCORD_URL } from "@/lib/constants"
import { Tournament } from "@prisma/client"

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
        <CardTitle>{tournament.name}</CardTitle>
        <CardDescription>{tournament.location}</CardDescription>
        <CardDescription className="flex gap-1 mt-4">
          <span>From {format(tournament.startDate, "dd-MM")} to</span>
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
        {tournament.sets && (
          <Badge variant="outline">{tournament.sets} Sets</Badge>
        )}
        <Badge variant="outline">{tournament.surface} Court</Badge>
      </CardContent>
      <CardFooter className="flex flex-row items-center gap-4">
        <Link
          href={DISCORD_URL}
          title="Join Tournament"
          target="_blank"
          rel="noreferrer"
          className={buttonVariants({ variant: "default" })}
        >
          <UserPlus size={16} />
          Join
        </Link>
        <Link
          href={`/tournaments/2025/${tournament.id}`}
          title="View Tournament"
          className={buttonVariants({ variant: "default" })}
        >
          <Tv size={16} /> Results
        </Link>
      </CardFooter>
    </Card>
  )
}
