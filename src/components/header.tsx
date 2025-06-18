import Link from "next/link"
import { buttonVariants } from "./ui/button"

export default function Header() {
  return (
    <header className="flex items-center justify-between p-2 bg-primary/10 fixed top-4 left-0 right-0 border border-primary/10 backdrop-blur-2xl rounded-lg mt-4">
      <Link href={"/"} title="Top Spin 2k World Tour">
        <img src="/image-bg.png" alt="logo" width={60} className="rounded-lg" />
      </Link>
      <div>
        <Link
          className={buttonVariants({ variant: "link" })}
          href={"/rankings"}
          title="Live Rankings"
        >
          Rankings
        </Link>
        <Link
          className={buttonVariants({ variant: "link" })}
          href={"/tournaments"}
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
          href={"/register"}
          title="Register new player"
        >
          Register
        </Link>
      </div>
    </header>
  )
}
