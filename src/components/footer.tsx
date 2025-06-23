import { DISCORD_URL, GITHUB_URL } from "@/lib/constants"
import { Github, Info, Speech } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full flex flex-col border bg-card p-4 backdrop-blur-2xl rounded-lg mb-4">
      <nav className="flex flex-row justify-between items-center w-full mb-8">
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={16} />
          GitHub
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href={DISCORD_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Speech size={16} />
          Discord
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/about"
          title="About us"
        >
          <Info size={16} />
          About us
        </Link>
      </nav>
      <p className="text-foreground/60 text-sm">
        {new Date().getFullYear()} Top Spin 2k World Tour
      </p>
    </footer>
  )
}
