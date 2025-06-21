"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MatchCard from "@/components/match-card"
import { groupByRound } from "@/lib/utils"
import { Match } from "@prisma/client"

export default function TournamentTabs({ matches }: { matches: Match[] }) {
  const groupedMatches = groupByRound(matches)
  const rounds = Object.keys(groupedMatches)
  const [activeTab, setActiveTab] = useState(rounds[0])

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="flex flex-wrap gap-2 mb-4">
        {rounds.map((round) => (
          <TabsTrigger key={round} value={round} className="capitalize">
            {round}
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
