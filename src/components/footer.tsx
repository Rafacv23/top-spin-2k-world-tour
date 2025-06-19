import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full flex flex-col border bg-card p-4 backdrop-blur-2xl rounded-lg mb-4">
      <nav className="flex flex-row justify-between items-center w-full mb-8">
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href={"/contact"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Contact
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/about"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          About us
        </Link>
      </nav>
      <p className="text-foreground/60">
        {new Date().getFullYear()} Top Spin 2k World Tour
      </p>
    </footer>
  )
}
