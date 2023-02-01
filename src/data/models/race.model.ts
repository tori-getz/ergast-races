import { z } from "zod";

export const RaceModel = z.object({
  raceName: z.string(),
  round: z.string(),
  season: z.string(),
  url: z.string(),
  date: z.string(),
  Circuit: z.object({
    Location: z.object({
      country: z.string(),
      lat: z.string(),
      long: z.string(),
      locality: z.string(),
    }),
    circuitId: z.string(),
    circuitName: z.string(),
    url: z.string(),
  }),
});
