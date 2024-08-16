import { Role } from '@/types/team';
import { z } from 'zod';
export const memberSchema = z
  .object({
    username: z.string().min(3, 'Username must be at least 3 characters'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string(),
    first_name: z.string().min(1, 'First name is required'),
    last_name: z.string().min(1, 'Last name is required'),
    role: z.nativeEnum(Role),
    skills: z.array(z.string()),
    bio: z.string(),
    rate: z.number().min(0, 'Rate must be a positive number'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

export type MemberFormData = z.infer<typeof memberSchema>;
