import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card"

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
        <ul className="flex items-center justify-center gap-4">
          <li>
            <Card>
              <CardHeader>
                <CardTitle>Live Rankings</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Rankings based on performance and statistics for all players.
                </CardDescription>
              </CardContent>
            </Card>
          </li>
          <li>
            <Card>
              <CardHeader>
                <CardTitle>Weekly Tournaments</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Weekly and monthly tournaments with ranking points for all the
                  players.
                </CardDescription>
              </CardContent>
            </Card>
          </li>
          <li>
            <Card>
              <CardHeader>
                <CardTitle>Major Titles</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Major title events, with extra points and more prestige.
                </CardDescription>
              </CardContent>
            </Card>
          </li>
        </ul>
      </footer>
    </section>
  )
}
