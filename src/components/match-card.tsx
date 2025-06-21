import { whoWinsTheSet } from "@/lib/utils"
import { Match, Set } from "@prisma/client"
import { format } from "date-fns"

interface MatchCardProps {
  match: Match & { sets: Set[] }
}

export default function MatchCard({ match }: MatchCardProps) {
  return (
    <li className="flex flex-col items-start gap-4 bg-card p-4 rounded-lg border w-full">
      <header className="flex flex-row items-center gap-2">
        <h3>{format(match.date, "dd-MM")}</h3>
      </header>

      <div className="w-full flex flex-row items-start gap-4">
        {/* Player Names and Scores */}
        <div className="flex flex-col gap-4">
          {/* Player One */}
          <div className="flex flex-row items-center gap-2 w-full">
            <h4 className="w-24 mr-10">{match.playerOneId}</h4>
            {match.sets.map((set, idx) => {
              const winner = whoWinsTheSet(
                set.playerOneScore,
                set.playerTwoScore
              )
              return (
                <span
                  key={`p1-set-${idx}`}
                  className={`px-2 ${
                    winner === "p1"
                      ? "text-primary font-bold"
                      : "text-foreground/60"
                  }`}
                >
                  {set.playerOneScore}
                </span>
              )
            })}
          </div>

          {/* Player Two */}
          <div className="flex flex-row items-center gap-2">
            <h4 className="w-24 mr-10">{match.playerTwoId}</h4>
            {match.sets.map((set, idx) => {
              const winner = whoWinsTheSet(
                set.playerOneScore,
                set.playerTwoScore
              )
              return (
                <span
                  key={`p2-set-${idx}`}
                  className={`px-2 ${
                    winner === "p2"
                      ? "text-primary font-bold"
                      : "text-foreground/60"
                  }`}
                >
                  {set.playerTwoScore}
                </span>
              )
            })}
          </div>
        </div>
      </div>
    </li>
  )
}
