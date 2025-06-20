import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Background from "@/components/background"
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/constants"
import { Toaster } from "@/components/ui/sonner"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  creator: "Rafa Canosa",
  authors: { name: "Rafa Canosa", url: "https://rafacanosa.dev" },
  metadataBase: new URL(SITE_URL),
  category: "Games",
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    images: [
      {
        url: `${SITE_URL}/image.png`,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  keywords: [
    "Top Spin 2k World Tour",
    "Top Spin 2k25 World Tour",
    "Top Spin 2k25 World Tour 2022",
    "Top Spin 2k25 World Tour 2023",
    "Top Spin 2k25 World Tour 2024",
    "Top Spin 2k25 World Tour 2025",
    "Top Spin 2k25",
    "Top Spin 2k",
    "Top Spin",
    "2k25",
    "2k",
    "Tennis videogames",
    "Online multiplayer",
    "Community-driven",
    "online tournaments",
    "Open source",
  ],
  referrer: "origin-when-cross-origin",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  twitter: {
    card: "summary_large_image",
    site: "@rafacanosa",
    creator: "@rafacanosa",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/image.png`,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
}

export const viewport: Viewport = {
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "black" }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} dark antialiased`}
      >
        <Header />
        <Background />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  )
}
