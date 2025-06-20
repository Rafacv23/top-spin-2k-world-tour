import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card"
import { INSTANT_GAMING_URL } from "@/lib/constants"
import { Handshake, MessageCircle, ShoppingCart } from "lucide-react"
import Link from "next/link"

const links = [
  {
    name: "Reddit",
    description:
      "Rankings based on performance and statistics for all players.",
    href: "https://www.reddit.com/r/TopSpin2k25WorldTour/",
    button: "Share your ranking",
    icon: MessageCircle,
  },
  {
    name: "Instant Gaming",
    description:
      "Rankings based on performance and statistics for all players.",
    href: INSTANT_GAMING_URL,
    button: "Buy games",
    icon: ShoppingCart,
  },
  {
    name: "Invite",
    description:
      "Rankings based on performance and statistics for all players.",
    href: "/",
    button: "Invite friends",
    icon: Handshake,
  },
]

export default function About() {
  return (
    <section id="about" className="h-screen py-20 flex flex-col gap-4">
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
                    <link.icon className="inline mr-2" />
                    {link.button}
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
