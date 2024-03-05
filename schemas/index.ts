import * as z from "zod";

export const SigninSchema = z.object({
    email: z.string().min(1, { message: "Email is Required!" }).email({ message: "Enter a valid Email!" }),
    password: z.string().min(1, { message: "Password Required!" }),
})

export const RegisterSchema = z.object({
    name: z
        .string()
        .min(1, { message: "Name is Required!" }),
    email: z
        .string()
        .min(1, { message: "Email is Required!" })
        .email({ message: "Enter a valid Email!" }),
    role: z
        .enum(["candidate", "employer"]),
    password: z
        .string()
        .min(6, { message: "Password is 6 character or more!" }),
    confirmPassword: z
        .string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match!",
    path: ["confirmPassword"],
});