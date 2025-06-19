"use server"

import { z } from "zod"
import { registerSchema } from "./schemas"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function registerNewPlayer(
  values: z.infer<typeof registerSchema>
) {
  try {
    // first we register the player
    const newPlayer = await prisma.player.create({
      data: {
        discord: values.discordId,
        id2k: values.id2k,
        name: values.name,
        country: values.country,
        platform: values.platform,
        email: values.email,
        experience: values.experience,
        availability: values.availability,
        playerChoice: values.playerChoice,
        policy: values.policy,
      },
    })

    // after that we register the player in the rankings for the current year

    const currentYear = new Date().getFullYear()

    await prisma.ranking.create({
      data: {
        playerId: newPlayer.id,
        year: currentYear,
      },
    })

    return {
      status: 200,
      message: "Successfully registered new player",
    }
  } catch (error) {
    return {
      status: 400,
      message: "Error registering new player",
      error: error,
    }
  }
}
