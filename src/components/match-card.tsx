import { whoWinsTheSet } from "@/lib/utils"
import { Match } from "@/lib/types"

export default function MatchCard({ match }: { match: Match }) {
  return (
    <li className="flex flex-col items-center gap-4 bg-card p-4 rounded-lg border w-full">
      <header className="flex flex-row items-center gap-2">
        <h3>{match.date}</h3>
      </header>

      {/* Player One */}
      <div className="flex flex-row items-center justify-between w-full gap-8">
        <h4>{match.playerOne}</h4>
        <div className="flex flex-row gap-2">
          {match.sets.map((set, idx) => {
            const winner = whoWinsTheSet(set.playerOneScore, set.playerTwoScore)
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
      </div>

      {/* Player Two */}
      <div className="flex flex-row items-center justify-between w-full gap-8">
        <h4>{match.playerTwo}</h4>
        <div className="flex flex-row gap-2">
          {match.sets.map((set, idx) => {
            const winner = whoWinsTheSet(set.playerOneScore, set.playerTwoScore)
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
    </li>
  )
}
