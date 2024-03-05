"use server"

import { RegisterInputType } from "@/components/auth/register-form"
import { SigninInputType } from "@/components/auth/signin-form"
import { signIn, signOut } from "@/lib/auth";
import { db } from "@/prisma/db";
import { RegisterSchema, SigninSchema } from "@/schemas";
import bcrypt from "bcryptjs";

export const signin = async (values: SigninInputType) => {
    const validatedFields = SigninSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: "Invalided Fields!" }
    }


    await signIn("credentials", {
        ...validatedFields.data
    })

}

export const register = async (values: RegisterInputType) => {
    const validatedFields = RegisterSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: "Invalided Fields!" }
    }

    const { confirmPassword, ...newCredentials } = validatedFields.data;

    const existingUser = await db.user.findFirst({
        where: {
            email: newCredentials.email,
            provider: 'credentials'
        }
    });

    if (!!existingUser) {
        return { error: "Email Already Taken!" }
    }

    await db.user.create({
        data: {
            email: newCredentials.email,
            name: newCredentials.name,
            password: await bcrypt.hash(newCredentials.password, 10),
            role: newCredentials.role,
            provider: "credentials"
        }
    })

    return { success: "Account Successfully Created! Please Login." }

}

export const signInWithGithub = async () => {
    await signIn('github', {
        redirect: true,
        redirectTo: '/'
    })

}
export const signInWithGoogle = async () => {
    await signIn('google', {
        redirect: true,
        redirectTo: '/'
    })
}


export const logOut = async () => {
    await signOut({
        redirect: true,
        redirectTo: '/'
    })
}
