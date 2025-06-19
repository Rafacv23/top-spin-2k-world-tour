import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card"
import Link from "next/link"

const links = [
  {
    name: "Reddit",
    description:
      "Rankings based on performance and statistics for all players.",
    href: "/register",
  },
  {
    name: "Instant Gaming",
    description:
      "Rankings based on performance and statistics for all players.",
    href: "/register",
  },
  {
    name: "Invite",
    description:
      "Rankings based on performance and statistics for all players.",
    href: "/register",
  },
]

export default function About() {
  return (
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
        Help us to grow our platform. Invite your friends, share the community,
        and get ready to climb the ranks.
      </p>
      <footer className="mt-4">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {links.map((link) => (
            <li key={link.name}>
              <Card>
                <CardHeader>
                  <CardTitle>{link.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{link.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Link
                    href={link.href}
                    className={buttonVariants({ variant: "outline" })}
                  >
                    Join
                  </Link>
                </CardFooter>
              </Card>
            </li>
          ))}
        </ul>
      </footer>
    </section>
  )
}
