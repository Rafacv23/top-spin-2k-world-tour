import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card"
import Link from "next/link"

export default function Contact() {
  return (
    <section id="contact" className="py-20 flex flex-col gap-4">
      <div className="flex items-center justify-center bg-background">
        <span className="absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-white to-primary bg-clip-text text-4xl box-content font-extrabold text-transparent text-center select-none">
          Contact
        </span>
        <h2 className="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-white to-primary  bg-clip-text text-4xl font-extrabold text-transparent text-center select-auto">
          Contact
        </h2>
      </div>
      <p className="text-2xl">
        If you have any questions, suggestions, or need assistance, feel free to
        reach out to us via our social media channels.
      </p>
      <footer className="mt-4">
        <ul className="flex items-center justify-center gap-4">
          <li>
            <Card>
              <CardHeader>
                <CardTitle>Mail</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Rankings based on performance and statistics for all players.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Link
                  href={"/register"}
                  className={buttonVariants({ variant: "outline" })}
                >
                  Join
                </Link>
              </CardFooter>
            </Card>
          </li>
          <li>
            <Card>
              <CardHeader>
                <CardTitle>Discord</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Rankings based on performance and statistics for all players.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Link
                  href={"/register"}
                  className={buttonVariants({ variant: "outline" })}
                >
                  Join
                </Link>
              </CardFooter>
            </Card>
          </li>
          <li>
            <Card>
              <CardHeader>
                <CardTitle>About</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Rankings based on performance and statistics for all players.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Link
                  href={"/register"}
                  className={buttonVariants({ variant: "outline" })}
                >
                  Join
                </Link>
              </CardFooter>
            </Card>
          </li>
        </ul>
      </footer>
    </section>
  )
}
