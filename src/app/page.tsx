import Hero from "@/components/landing/hero"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Hero />
        <section className="h-screen pt-20 flex flex-col gap-4">
          <h2 className="text-2xl font-bold">
            Weekly Tournaments & Live Rankings
          </h2>
          <p>
            Major title events, weekly and monthly tournaments with points. Live
            rankings based on performance and statistics for all players.
          </p>
          <footer className="flex items-center gap-4">
            <Link
              href={"/register"}
              className={buttonVariants({ variant: "default" })}
            >
              Live Rankings
            </Link>
          </footer>
        </section>
        <section className="h-screen pt-20 flex flex-col gap-4">
          <h3 className="text-2xl font-bold">
            Help us to grow and improve our platform
          </h3>
          <p>
            Invite your friends, share the community, and get ready to climb the
            ranks.
          </p>
          <footer className="flex items-center gap-4">
            <Link
              href={"/register"}
              className={buttonVariants({ variant: "default" })}
            >
              Discord
            </Link>
            <Link
              href={"/register"}
              className={buttonVariants({ variant: "default" })}
            >
              Reddit
            </Link>
            <Link
              href={"/register"}
              className={buttonVariants({ variant: "default" })}
            >
              Invite your friends
            </Link>
            <Link
              href={"/register"}
              className={buttonVariants({ variant: "default" })}
            >
              Instant Gaming
            </Link>
          </footer>
        </section>
        <section className="py-20 flex flex-col gap-4">
          <h3 className="text-2xl font-bold">Contact</h3>
          <p>
            If you have any questions, suggestions, or need assistance, feel
            free to reach out to us via our social media channels.
          </p>
          <footer className="flex items-center gap-4">
            <Link
              href={"/register"}
              className={buttonVariants({ variant: "default" })}
            >
              Mail
            </Link>
            <Link
              href={"/register"}
              className={buttonVariants({ variant: "default" })}
            >
              Discord
            </Link>
            <Link
              href={"/register"}
              className={buttonVariants({ variant: "default" })}
            >
              About
            </Link>
          </footer>
        </section>
      </main>
    </div>
  )
}
