import { z } from 'zod';

export const signInSchema = z.object({
    identifier: z.string(), // identifier means 'email' here
    password: z.string(),
})