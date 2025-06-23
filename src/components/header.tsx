import Link from "next/link"
import { buttonVariants } from "./ui/button"
import { Medal, Trophy, UserRoundPlus } from "lucide-react"

export default function Header() {
  const currentYear = new Date().getFullYear()

  return (
    <header className="flex items-center justify-between p-2 bg-card/60 z-50 fixed md:top-4 left-0 right-0 border backdrop-blur-lg rounded-lg md:mt-4">
      <Link href={"/"} title="Top Spin 2k World Tour">
        <img
          src="/image-bg.webp"
          alt="logo"
          width={60}
          className="rounded-lg"
        />
      </Link>
      <div>
        <Link
          className={buttonVariants({ variant: "ghost" })}
          href={`/rankings/${currentYear}`}
          title="Live Rankings"
        >
          <Medal className="hidden mr-2 invisible md:visible" />
          Rankings
        </Link>
        <Link
          className={buttonVariants({ variant: "ghost" })}
          href={`/tournaments/${currentYear}`}
          title="Tournaments"
        >
          <Trophy className="hidden mr-2 invisible md:visible" />
          Tournaments
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Link
          className={buttonVariants({ variant: "default" })}
          href={"/register"}
          title="Register new player"
        >
          <UserRoundPlus className="hidden mr-2 invisible md:visible" />
          Register
        </Link>
      </div>
    </header>
  )
}
