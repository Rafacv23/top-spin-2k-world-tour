import Hero from "@/components/landing/hero"
import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Hero />
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
                      Rankings based on performance and statistics for all
                      players.
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
                      Weekly and monthly tournaments with ranking points for all
                      the players.
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
        <section id="about" className="h-screen pt-20 flex flex-col gap-4">
          <div className="flex items-center justify-center bg-background">
            <span className="absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-white to-primary bg-clip-text text-4xl box-content font-extrabold text-transparent text-center select-none">
              Help us to Grow
            </span>
            <h2 className="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-white to-primary  bg-clip-text text-4xl font-extrabold text-transparent text-center select-auto">
              Help us to Grow
            </h2>
          </div>
          <p className="text-2xl">
            Help us to grow our platform. Invite your friends, share the
            community, and get ready to climb the ranks.
          </p>
          <footer className="mt-4">
            <ul className="flex items-center justify-center gap-4">
              <li>
                <Card>
                  <CardHeader>
                    <CardTitle>Reddit</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Rankings based on performance and statistics for all
                      players.
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href={"/register"}
                      className={buttonVariants({ variant: "outline" })}
                    >
                      Join
                    </Link>
                  </CardFooter>
                </Card>
              </li>
              <li>
                <Card>
                  <CardHeader>
                    <CardTitle>Discord</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Rankings based on performance and statistics for all
                      players.
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href={"/register"}
                      className={buttonVariants({ variant: "outline" })}
                    >
                      Join
                    </Link>
                  </CardFooter>
                </Card>
              </li>
              <li>
                <Card>
                  <CardHeader>
                    <CardTitle>Instant Gaming</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Rankings based on performance and statistics for all
                      players.
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href={"/register"}
                      className={buttonVariants({ variant: "outline" })}
                    >
                      Join
                    </Link>
                  </CardFooter>
                </Card>
              </li>
              <li>
                <Card>
                  <CardHeader>
                    <CardTitle>Invite</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Rankings based on performance and statistics for all
                      players.
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href={"/register"}
                      className={buttonVariants({ variant: "outline" })}
                    >
                      Join
                    </Link>
                  </CardFooter>
                </Card>
              </li>
            </ul>
          </footer>
        </section>
        <section id="contact" className="py-20 flex flex-col gap-4">
          <div className="flex items-center justify-center bg-background">
            <span className="absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-white to-primary bg-clip-text text-4xl box-content font-extrabold text-transparent text-center select-none">
              Contact
            </span>
            <h2 className="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-white to-primary  bg-clip-text text-4xl font-extrabold text-transparent text-center select-auto">
              Contact{" "}
            </h2>
          </div>
          <p className="text-2xl">
            If you have any questions, suggestions, or need assistance, feel
            free to reach out to us via our social media channels.
          </p>
          <footer className="mt-4">
            <ul className="flex items-center justify-center gap-4">
              <li>
                <Card>
                  <CardHeader>
                    <CardTitle>Mail</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Rankings based on performance and statistics for all
                      players.
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href={"/register"}
                      className={buttonVariants({ variant: "outline" })}
                    >
                      Join
                    </Link>
                  </CardFooter>
                </Card>
              </li>
              <li>
                <Card>
                  <CardHeader>
                    <CardTitle>Discord</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Rankings based on performance and statistics for all
                      players.
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href={"/register"}
                      className={buttonVariants({ variant: "outline" })}
                    >
                      Join
                    </Link>
                  </CardFooter>
                </Card>
              </li>
              <li>
                <Card>
                  <CardHeader>
                    <CardTitle>About</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Rankings based on performance and statistics for all
                      players.
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href={"/register"}
                      className={buttonVariants({ variant: "outline" })}
                    >
                      Join
                    </Link>
                  </CardFooter>
                </Card>
              </li>
            </ul>
          </footer>
        </section>
      </main>
    </div>
  )
}
