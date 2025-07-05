"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MatchCard from "@/components/match-card"
import { formatRoundLabel, groupByRound } from "@/lib/utils"
import { Match, Set } from "@prisma/client"
import { useState } from "react"

const ROUND_ORDER = [
  "ROUND_OF_128",
  "ROUND_OF_64",
  "ROUND_OF_32",
  "ROUND_OF_16",
  "QUARTER_FINALS",
  "SEMI_FINALS",
  "FINAL",
]

interface TournamentTabsProps {
  matches: (Match & { sets: Set[] })[]
}

export default function TournamentTabs({ matches }: TournamentTabsProps) {
  const groupedMatches = groupByRound(matches)
  const rounds = Object.keys(groupedMatches).sort(
    (a, b) => ROUND_ORDER.indexOf(a) - ROUND_ORDER.indexOf(b)
  )
  const [activeTab, setActiveTab] = useState(rounds[0])

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="flex flex-wrap gap-2 mb-4">
        {rounds.map((round) => (
          <TabsTrigger key={round} value={round} className="capitalize">
            {formatRoundLabel(round)}
          </TabsTrigger>
        ))}
      </TabsList>
      {rounds.map((round) => (
        <TabsContent key={round} value={round}>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {groupedMatches[round].map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </ul>
        </TabsContent>
      ))}
    </Tabs>
  )
}
