import { z } from 'zod';

const today = new Date();

export const UserSchema = z.object({
  fname: z.string(),
  mname: z.string(),
  lname: z.string(),
  email: z.string().email("Please type a valid email address"),
  password: z.string(),
  createdAt: z.date(),
  last_login_at: z.date(),
});

export type UserSchemaType = z.infer<typeof UserSchema>

export const UserSchemaDefault : UserSchemaType = {
  fname: "",
  mname: "",
  lname: "",
  email: "",
  password: "",
  createdAt: today,
  last_login_at: today,
}

export const UserSchemaArray = z.array(UserSchema);
export type UserSchemaArrayType = z.infer<typeof UserSchemaArray>

export const RegisterSchema = UserSchema.extend({
  password: z.string().min(8, "Passwords must be at least 8 characters").max(50,"Passwords cannot have more than 50 characters"),
  confirmEmail: z.string().email(),
  confirmPassword: z.string().min(8, "Passwords must be at least 8 characters").max(50,"Passwords cannot have more than 50 characters")
}).superRefine((data, ctx) => {
    if(data.fname === "")
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["name"],
        message: "Name cannot be empty"
      });
    if(data.lname === "")
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["surname"],
        message: "Name cannot be empty"
      });
    if(data.mname === "")
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["mname"],
        message: "Name cannot be empty"
      });
  });

export type  RegisterSchemaType = z.infer<typeof RegisterSchema>;

export const RegisterSchemaDefault : RegisterSchemaType = {
  fname: "",
  mname: "",
  lname: "",
  email: "",
  confirmEmail: "",
  password: "",
  confirmPassword: "",
  createdAt: today,
  last_login_at: today,
}

