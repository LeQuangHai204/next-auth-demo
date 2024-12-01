import * as z from "zod";

export const logInSchema = z.object({
    id: z.string(),
    name: z.string({
        message: "Name is required",
    }),
    email: z
        .string({
            message: "Email is required",
        })
        .email({
            message: "Invalid email",
        }),
    password: z
        .string({
            message: "Password is required",
        })
        .min(1, {
            message: "Password is too short",
        }),
    createdAt: z.string(),
    updatedAt: z.string(),
});
