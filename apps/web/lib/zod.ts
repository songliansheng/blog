import { z } from 'zod'
export const signInSchema = z.object({
    email: z
        .string()
        .email('Invalid email address')
        .min(5, 'Email is too short'),
    password: z.string().min(8, 'Password is too short'),
})
