import { z } from 'zod';

export const DriverModel = z.object({
  driverId: z.string(),
  permanentNumber: z.string().optional(),
  code: z.string().optional(),
  url: z.string(),
  givenName: z.string(),
  familyName: z.string(),
  dateOfBirth: z.string(), 
});
