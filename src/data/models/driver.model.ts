import { z } from 'zod';

export const DriverModel = z.object({
  driverId: z.string(),
  permanentNumber: z.string(),
  code: z.string(),
  url: z.string(),
  givenName: z.string(),
  familyName: z.string(),
  dateOfBirth: z.date(), 
});
