import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card"

const features = [
  {
    title: "Live Rankings",
    description:
      "Rankings based on performance and statistics for all players.",
  },
  {
    title: "Weekly Tournaments",
    description:
      "Weekly and monthly tournaments with ranking points for all the players.",
  },
  {
    title: "Major Titles",
    description: "Major title events, with extra points and more prestige.",
  },
]

export default function Features() {
  return (
    <section id="features" className="h-screen pt-20 flex flex-col gap-4">
      <div className="flex items-center justify-center bg-background">
        <span className="absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-white to-primary bg-clip-text text-4xl box-content font-extrabold text-transparent text-center select-none">
          Weekly Tournaments & Live Rankings
        </span>
        <h2 className="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-white to-primary  bg-clip-text text-4xl font-extrabold text-transparent text-center select-auto">
          Weekly Tournaments & Live Rankings
        </h2>
      </div>
      <p className="text-2xl">
        Major title events, weekly and monthly tournaments with points. Live
        rankings based on performance and statistics for all players.
      </p>
      <footer className="mt-4">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {features.map((feature) => (
            <li key={feature.title}>
              <Card>
                <CardHeader>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </footer>
    </section>
  )
}
