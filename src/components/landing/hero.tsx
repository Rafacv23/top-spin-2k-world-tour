import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="min-h-screen pt-20 flex flex-col gap-4">
      <img src="/image-bg.png" alt="logo" width={200} className="rounded-lg" />
      <div className="flex items-center justify-center bg-background">
        <span className="absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-white to-primary bg-clip-text text-6xl box-content font-extrabold text-transparent text-center select-none">
          Top Spin 2k
        </span>
        <h1 className="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-white to-primary  bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto">
          Top Spin 2k World Tour
        </h1>
      </div>
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
          href={"/tournaments"}
          className={buttonVariants({ variant: "outline" })}
        >
          Next Tournaments
        </Link>
      </footer>
    </section>
  )
}
