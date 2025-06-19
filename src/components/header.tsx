import Link from "next/link"
import { buttonVariants } from "./ui/button"
import { Medal, Trophy, UserRoundPlus } from "lucide-react"

export default function Header() {
  const currentYear = new Date().getFullYear()

  return (
    <header className="flex items-center justify-between p-2 bg-card/60 z-50 fixed top-4 left-0 right-0 border backdrop-blur-lg rounded-lg mt-4">
      <Link href={"/"} title="Top Spin 2k World Tour">
        <img src="/image-bg.png" alt="logo" width={60} className="rounded-lg" />
      </Link>
      <div>
        <Link
          className={buttonVariants({ variant: "ghost" })}
          href={`/rankings/${currentYear}`}
          title="Live Rankings"
        >
          <Medal className="inline mr-2" />
          Rankings
        </Link>
        <Link
          className={buttonVariants({ variant: "ghost" })}
          href={`/tournaments/${currentYear}`}
          title="Tournaments"
        >
          <Trophy className="inline mr-2" />
          Tournaments
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Link
          className={buttonVariants({ variant: "default" })}
          href={"/register"}
          title="Register new player"
        >
          <UserRoundPlus className="inline mr-2" />
          Register
        </Link>
      </div>
    </header>
  )
}
