import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="min-h-screen pt-20 flex flex-col gap-4">
      <img src="/image-bg.png" alt="logo" width={200} className="rounded-lg" />
      <h1 className="text-5xl font-bold">
        <span className="text-primary">Top Spin 2k</span> World Tour
      </h1>
      <p>
        Join the ultimate tennis gaming tournament and compete with players
        worldwide
      </p>
      <footer className="flex items-center gap-4">
        <Link
          href={"/register"}
          className={buttonVariants({ variant: "default" })}
        >
          Register
        </Link>
        <Link
          href={"/tournaments"}
          className={buttonVariants({ variant: "outline" })}
        >
          Next Tournaments
        </Link>
      </footer>
    </section>
  )
}
