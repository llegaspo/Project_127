import { z } from 'zod';

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string()
    .min(8, { message: 'Minimum password length is 8 characters'})
    .max(50, { message: 'Password Length is too long'}),
  remember: z.boolean(),
});

export type LoginType = z.infer<typeof LoginSchema>;

export const LoginDefault: LoginType = {
  email: '',
  password: '',
  remember: false
}


