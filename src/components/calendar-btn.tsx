"use client"

import { buttonVariants } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { DISCORD_URL } from "@/lib/constants"
import { Calendar } from "lucide-react"
import Link from "next/link"
import { useMemo } from "react"

type CalendarBtnProps = {
  startDate: string // "yyyyMMdd'T'HHmmss'Z'"
  endDate: string
  tournamentTitle: string
  tournamentDescription: string
}

export default function CalendarBtn({
  startDate,
  endDate,
  tournamentTitle,
  tournamentDescription,
}: CalendarBtnProps) {
  const googleLink = `https://www.google.com/calendar/event?action=TEMPLATE&dates=${startDate}%2F${endDate}&text=${encodeURIComponent(
    tournamentTitle
  )}&details=${encodeURIComponent(
    tournamentDescription
  )}&location=${encodeURIComponent(DISCORD_URL)}`

  const yahooLink = useMemo(() => {
    const start = startDate.replace(/[-:]/g, "").replace("T", "").slice(0, 15)
    const end = endDate.replace(/[-:]/g, "").replace("T", "").slice(0, 15)
    return `https://calendar.yahoo.com/?v=60&title=${encodeURIComponent(
      tournamentTitle
    )}&st=${start}&et=${end}&desc=${encodeURIComponent(
      tournamentDescription
    )}&in_loc=${encodeURIComponent(DISCORD_URL)}`
  }, [startDate, endDate, tournamentTitle, tournamentDescription])

  const icsContent = `
BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${tournamentTitle}
DESCRIPTION:${tournamentDescription}
LOCATION:${DISCORD_URL}
DTSTART:${startDate}
DTEND:${endDate}
END:VEVENT
END:VCALENDAR
  `.trim()

  const icsBlob = useMemo(
    () => new Blob([icsContent], { type: "text/calendar" }),
    [icsContent]
  )
  const icsUrl = useMemo(() => URL.createObjectURL(icsBlob), [icsBlob])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={buttonVariants({ variant: "outline" })}>
        <Calendar size={16} /> Calendar
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Calendars</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href={googleLink} target="_blank" rel="noreferrer">
            Google
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={yahooLink} target="_blank" rel="noreferrer">
            Yahoo
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href={icsUrl} download={`${tournamentTitle}.ics`}>
            Apple / iCal / Outlook / Notion
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
