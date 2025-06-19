import Container from "@/components/container"
import { buttonVariants } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import matches from "@/lib/mocks/matches.json"
import { groupByRound } from "@/lib/utils"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default async function TournamentDetailsPage({
  params,
}: {
  params: Promise<{ year: string; id: string }>
}) {
  const { year, id } = await params

  const groupedMatches = groupByRound(matches)

  //TODO fetch tournament details based on year and id

  return (
    <Container>
      <header>
        <h1 className="text-4xl font-bold mb-4">
          {id}, {year}
        </h1>
        <nav>
          <Link
            href={`/tournaments/${year}`}
            className={buttonVariants({ variant: "outline" })}
          >
            <ArrowLeft className="mr-2" size={16} />
            Tournaments
          </Link>
        </nav>
      </header>
      <p>Details about the tournament will be displayed here.</p>
      <section id="results" className="w-full">
        {Object.entries(groupedMatches).map(([round, matches]) => (
          <Accordion type="single" collapsible key={round}>
            <AccordionItem value={`item-${round}`}>
              <AccordionTrigger className="text-2xl font-semibold my-4">
                {round.charAt(0).toUpperCase() + round.slice(1)}
              </AccordionTrigger>
              <AccordionContent>
                <ul className="flex flex-col gap-4">
                  {matches.map((match) => (
                    <li
                      key={match.id}
                      className="flex flex-col items-center gap-4 bg-card p-4 rounded-lg border w-full"
                    >
                      <header className="flex flex-row items-center gap-2">
                        <h3>{match.round}</h3> ({match.date})
                      </header>
                      <div className="flex flex-row items-center justify-between w-full gap-8">
                        <h4>{match.playerOne}</h4>
                        <div>
                          {match.results.firstSet[0]} |{" "}
                          {match.results.secondSet[0]} |{" "}
                          {match.results.thirdSet[0]}
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between w-full gap-8">
                        <h4>{match.playerTwo}</h4>
                        <div>
                          {match.results.firstSet[1]} |{" "}
                          {match.results.secondSet[1]} |{" "}
                          {match.results.thirdSet[1]}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </section>
    </Container>
  )
}
