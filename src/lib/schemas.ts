import { z } from "zod"
import { Platforms, AvailabilityDays, TypePlayer } from "@prisma/client"

export const registerSchema = z.object({
  discordId: z.string(),
  id2k: z.string(),
  name: z.string().optional(),
  country: z.string(),
  platform: z.nativeEnum(Platforms),
  email: z.string().email(),
  experience: z.boolean(),
  availability: z.array(z.nativeEnum(AvailabilityDays)),
  playerChoice: z.nativeEnum(TypePlayer),
  policy: z.boolean(),
})
