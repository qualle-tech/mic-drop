/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-floating-promises */

const { PrismaClient } = require("@prisma/client")
const MIC_DATA = require("./seed/MIC_DATA.json")
const MIC_TIME_DATA = require("./seed/MIC_TIME_DATA.json")
const VENUE_DATA = require("./seed/VENUE_DATA.json")

const prismaClient = new PrismaClient()

async function seed(): Promise<void> {
  try {
    const venues = [...VENUE_DATA]
    const times = [...MIC_TIME_DATA]
    const mics = [...MIC_DATA]

    await prismaClient.$transaction(async (batch) => {
      await batch.venue.createMany({ data: venues })
      await batch.mic_Time.createMany({ data: times })
      await Promise.all(mics.map((m) => batch.mic.create({ data: m })))
    })

    console.log("✨ Database seeded successfully ✨")
  } catch (e) {
    console.log(e.message)
    process.exit(1)
  } finally {
    await prismaClient.$disconnect()
  }
}

seed()
