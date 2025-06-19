"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button, buttonVariants } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { registerSchema } from "@/lib/schemas"
import countryList from "react-select-country-list"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useMemo, useState } from "react"
import { Platforms, TypePlayer } from "@prisma/client"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { AvailabilityDays } from "@prisma/client"
import { registerNewPlayer } from "@/lib/actions"
import { toast } from "sonner"
import {
  DISCORD_URL,
  INSTAGRAM_URL,
  INSTANT_GAMING_URL,
  SITE_NAME,
} from "@/lib/constants"
import Link from "next/link"
import {
  Check,
  ChevronsUpDown,
  LoaderCircle,
  Send,
  SquareArrowOutUpRight,
} from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { cn } from "@/lib/utils"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command"

export default function RegisterForm() {
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      discordId: "",
      id2k: "",
      name: "",
      country: "",
      platform: "PC",
      email: "",
      experience: false,
      availability: [],
      playerChoice: "REAL_PLAYER",
      policy: false,
    },
  })

  const countries = useMemo(() => countryList().getData(), [])

  async function clientAction(values: z.infer<typeof registerSchema>) {
    setIsLoading(true)
    try {
      const response = await registerNewPlayer(values)
      toast.success(response.message)
      form.reset()
      setFormSubmitted(true)
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong while registering. Try again later.")
    } finally {
      setIsLoading(false)
    }
  }

  if (formSubmitted) {
    return <Confirmation />
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(clientAction)}
        className="space-y-8 bg-card p-4 rounded-lg border shadow grid grid-cols-1 gap-4"
      >
        <FormField
          control={form.control}
          name="discordId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Discord ID</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  required
                  autoComplete="off"
                  aria-label="Discord Id"
                  placeholder="Your Discord ID"
                  {...field}
                />
              </FormControl>
              <FormDescription>Discord ID for communication</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="id2k"
          render={({ field }) => (
            <FormItem>
              <FormLabel>2K ID</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  required
                  autoComplete="off"
                  aria-label="2k Id"
                  placeholder="Your 2K ID"
                  {...field}
                />
              </FormControl>
              <FormDescription>2K ID for matchmaking</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Real Name (optional)</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  autoComplete="off"
                  aria-label="Real name or gamertag"
                  placeholder="Your real name or gamertag"
                  {...field}
                />
              </FormControl>
              <FormDescription>Helps us know you better</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Language</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-[200px] justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? countries.find(
                            (country) => country.value === field.value
                          )?.label
                        : "Select your country"}
                      <ChevronsUpDown className="opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput
                      placeholder="Search framework..."
                      className="h-9"
                    />
                    <CommandList>
                      <CommandEmpty>No country found.</CommandEmpty>
                      <CommandGroup>
                        {countries.map((country) => (
                          <CommandItem
                            value={country.label}
                            key={country.value}
                            onSelect={() => {
                              form.setValue("country", country.label)
                            }}
                          >
                            {country.label}
                            <Check
                              className={cn(
                                "ml-auto",
                                country.value === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormDescription>
                Select your country for better matchmaking
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="platform"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Platform</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Platform" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Object.entries(Platforms).map(([key, value]) => (
                    <SelectItem key={key} value={value}>
                      {value}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>Select the platform you play on</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  required
                  autoComplete="off"
                  aria-label="Your email"
                  placeholder="example@example.com"
                  {...field}
                />
              </FormControl>
              <FormDescription>Your email for communication</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="experience"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Have you played in a tournament before?</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={(value) => field.onChange(value === "true")}
                  defaultValue={String(field.value)}
                  className="flex flex-col"
                >
                  <FormItem className="flex items-center gap-3">
                    <FormControl>
                      <RadioGroupItem value="false" />
                    </FormControl>
                    <FormLabel className="font-normal">No</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center gap-3">
                    <FormControl>
                      <RadioGroupItem value="true" />
                    </FormControl>
                    <FormLabel className="font-normal">Yes</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormItem>
          <FormLabel>
            Availability to play games (Select one or more days)
          </FormLabel>
          <div className="grid grid-cols-2 mt-4 gap-2">
            {Object.values(AvailabilityDays).map((day) => (
              <FormField
                key={day}
                control={form.control}
                name="availability"
                render={({ field }) => {
                  return (
                    <FormItem key={day}>
                      <FormControl>
                        <Checkbox
                          checked={field.value?.includes(day)}
                          onCheckedChange={(checked) => {
                            return checked
                              ? field.onChange([...field.value, day])
                              : field.onChange(
                                  field.value.filter((d) => d !== day)
                                )
                          }}
                        />
                      </FormControl>
                      <FormLabel className="font-normal">{day}</FormLabel>
                    </FormItem>
                  )
                }}
              />
            ))}
          </div>
          <FormMessage />
        </FormItem>
        <FormField
          control={form.control}
          name="playerChoice"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>What type of player do you prefer?</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col"
                >
                  <FormItem className="flex items-center gap-3">
                    <FormControl>
                      <RadioGroupItem value={TypePlayer.MYPLAYER} />
                    </FormControl>
                    <FormLabel className="font-normal">My Player</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center gap-3">
                    <FormControl>
                      <RadioGroupItem value={TypePlayer.REAL_PLAYER} />
                    </FormControl>
                    <FormLabel className="font-normal">Real Player</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="policy"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>I agree to the tournament policy</FormLabel>
                <FormDescription>
                  You must accept the rules to participate in the tournament.
                </FormDescription>
              </div>
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isLoading}>
          {isLoading ? (
            <span className="flex items-center gap-2">
              <LoaderCircle size={16} className="animate-spin" /> Submitting
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Send size={16} /> Submit
            </span>
          )}
        </Button>
      </form>
    </Form>
  )
}

const links = [
  {
    title: "Discord",
    href: DISCORD_URL,
  },
  {
    title: "Instagram",
    href: INSTAGRAM_URL,
  },
  {
    title: "Instant Gaming",
    href: INSTANT_GAMING_URL,
  },
]

function Confirmation() {
  return (
    <div className="space-y-8 bg-card p-4 py-8 rounded-lg border shadow grid grid-cols-1 gap-4">
      <h3 className="text-2xl font-bold">Thank you for registering!</h3>
      <p>Welcome to the {SITE_NAME} community!</p>
      <p>
        You can explore the site and find more information about the
        tournaments. Or find us in our socials to start your career.
      </p>
      <div>
        <ul className="grid grid-cols-3 gap-4 items-center">
          {links.map((link) => (
            <li key={link.title} className="flex items-center gap-2">
              <Link
                href={link.href}
                className={buttonVariants({ variant: "default" })}
                target="_blank"
                rel="noreferrer"
              >
                {link.title} <SquareArrowOutUpRight size={16} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
