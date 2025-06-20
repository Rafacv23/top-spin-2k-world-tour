import Container from "@/components/container"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { INSTANT_GAMING_URL, SITE_NAME } from "@/lib/constants"
import { SquareArrowUpRight } from "lucide-react"
import Link from "next/link"

const teamMembers = [
  {
    name: "Levndros",
    role: "Founder",
    description: "Founder of the project. Passionate about the game.",
  },
  {
    name: "Rafa Canosa",
    role: "Developer",
    link: "https://www.rafacanosa.dev",
    description:
      "Passionate about coding and loves to contribute to open-source projects.",
  },
]

export default function AboutPage() {
  return (
    <Container>
      <h1 className="text-4xl font-bold">About {SITE_NAME}</h1>
      <p className="text-lg">
        {SITE_NAME} is a community-driven project. We are a group of passionate
        players who love to play Top Spin 2k25 and have been playing it for
        years. Our goal is to bring back the classic game with modern features
        and online multiplayer.
      </p>
      <h2 className="text-2xl font-bold mt-8">Our Team</h2>
      <p className="text-lg">
        Our team consists of experienced players who have been playing the game
        for years. We have a strong community of players who are passionate
        about the game and are always looking for new ways to improve the game.
        Our team is dedicated to providing the best possible experience for our
        players.
      </p>
      <div>
        <ul className="grid grid-cols-1 gap-4 ">
          {teamMembers.map((member) => (
            <li
              key={member.name}
              className="w-full bg-card p-4 rounded-lg border space-y-2"
            >
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-lg">{member.description}</p>
              <footer className="flex items-center justify-between">
                <Badge className="mx-0">{member.role}</Badge>
                {member.link && (
                  <Link
                    href={member.link}
                    target="_blank"
                    rel="noopener"
                    title={`Visit ${member.name}`}
                    className={buttonVariants({
                      variant: "outline",
                      className: "mx-0",
                    })}
                  >
                    Visit <SquareArrowUpRight size={16} className="inline" />
                  </Link>
                )}
              </footer>
            </li>
          ))}
        </ul>
      </div>
      <h2 className="text-2xl font-bold mt-8">Our Partners</h2>
      <p className="text-lg">
        We are proud to partner with some of the most popular online gaming
        services.
      </p>
      <div>
        <ul className="grid grid-cols-1 gap-4 ">
          <li className="w-full bg-card p-4 rounded-lg border space-y-2">
            <h3 className="text-xl font-bold">Instant Gaming</h3>
            <p className="text-lg">
              Instant Gaming is a digital game store that offers great deals on
              games. They are our official partner for game sales.
            </p>
            <footer className="flex items-center justify-between">
              <Badge className="mx-0">Shop</Badge>
              <Link
                href={INSTANT_GAMING_URL}
                target="_blank"
                rel="noopener"
                title="Visit Instang Gaming"
                className={buttonVariants({
                  variant: "outline",
                  className: "mx-0",
                })}
              >
                Visit <SquareArrowUpRight size={16} className="inline" />
              </Link>
            </footer>
          </li>
        </ul>
      </div>
    </Container>
  )
}
