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
import CalendarBtn from "@/components/calendar-btn"

type TournamentCardProps = {
  tournament: Tournament
}
export default function TournamentCard({ tournament }: TournamentCardProps) {
  const today = new Date()
  const startDate = new Date(tournament.startDate)

  const formatedStartDate = format(tournament.startDate, "yyyyMMdd'T'HHmmss'Z'")
  const formatedEndDate = format(tournament.endDate, "yyyyMMdd'T'HHmmss'Z'")

  const played = today > startDate // check if the tournaments has started or not

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
        {tournament.sets && (
          <Badge variant="outline">{tournament.sets} Sets</Badge>
        )}
        <Badge variant="outline">
          {tournament.surface.charAt(0).toUpperCase() +
            tournament.surface.slice(1).toLowerCase()}{" "}
          Court
        </Badge>
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
        {played ? (
          <Link
            href={`/tournaments/2025/${tournament.id}`}
            title="View Tournament"
            className={buttonVariants({ variant: "default" })}
          >
            <Tv size={16} /> Results
          </Link>
        ) : (
          <CalendarBtn
            startDate={formatedStartDate}
            endDate={formatedEndDate}
            tournamentTitle={tournament.name}
            tournamentDescription={
              tournament.location + " " + tournament.surface
            }
          />
        )}
      </CardFooter>
    </Card>
  )
}
