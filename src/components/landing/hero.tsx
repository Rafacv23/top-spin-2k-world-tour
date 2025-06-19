import { buttonVariants } from "@/components/ui/button"
import { SITE_NAME } from "@/lib/constants"
import Link from "next/link"
import GlowingTitle from "../glowing-title"

export default function Hero() {
  const currentYear = new Date().getFullYear()

  return (
    <section className="min-h-screen pt-20 flex flex-col gap-4">
      <img src="/image-bg.png" alt="logo" width={200} className="rounded-lg" />
      <GlowingTitle>{SITE_NAME}</GlowingTitle>
      <p className="text-center text-2xl">
        Join the ultimate tennis gaming tournament and compete with players
        worldwide
      </p>
      <footer className="flex items-center gap-4 mt-4">
        <Link
          href={"/register"}
          className={buttonVariants({ variant: "default" })}
        >
          Register
        </Link>
        <Link
          href={`/tournaments/${currentYear}`}
          className={buttonVariants({ variant: "outline" })}
        >
          Next Tournaments
        </Link>
      </footer>
    </section>
  )
}
