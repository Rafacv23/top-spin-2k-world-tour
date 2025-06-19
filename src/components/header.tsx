import Link from "next/link"
import { buttonVariants } from "./ui/button"
import { REGISTER_URL } from "@/lib/constants"

export default function Header() {
  const currentYear = new Date().getFullYear()

  return (
    <header className="flex items-center justify-between p-2 bg-card z-50 fixed top-4 left-0 right-0 border backdrop-blur-lg rounded-lg mt-4">
      <Link href={"/"} title="Top Spin 2k World Tour">
        <img src="/image-bg.png" alt="logo" width={60} className="rounded-lg" />
      </Link>
      <div>
        <Link
          className={buttonVariants({ variant: "ghost" })}
          href={"/rankings"}
          title="Live Rankings"
        >
          Rankings
        </Link>
        <Link
          className={buttonVariants({ variant: "ghost" })}
          href={`/tournaments/${currentYear}`}
          title="Tournaments"
        >
          Tournaments
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Link
          className={buttonVariants({ variant: "outline" })}
          href={"/login"}
          title="Login to your account"
        >
          Login
        </Link>
        <Link
          className={buttonVariants({ variant: "default" })}
          href={REGISTER_URL}
          title="Register new player"
        >
          Register
        </Link>
      </div>
    </header>
  )
}
