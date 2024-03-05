import { db } from '@/prisma/db';
import { User } from '@prisma/client';
import NextAuth from 'next-auth';
import github from "next-auth/providers/github";
import google from "next-auth/providers/google";
import credentials from "next-auth/providers/credentials"
import bcrypt from "bcryptjs";

export const { handlers: { GET, POST }, auth, signIn, signOut, update } = NextAuth({
    providers: [
        github({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        }),
        google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        credentials({
            async authorize(credentials) {
                const user = await db.user.findFirst({
                    where: {
                        email: credentials.email as string,
                        provider: "credentials"
                    }
                });

                if(!user){
                    return null
                }

                const passwordMatch = await bcrypt.compare(credentials.password as string, user.password as string);

                if(!passwordMatch){
                    return null
                }

                const { password, ...userWithoutPass } = user;

                return userWithoutPass
            }
        })
    ],
    callbacks: {
        async signIn({ profile, account }) {

            if (account?.provider !== "credentials") {
                const existingUser = await db.user.findFirst({
                    where: {
                        email: profile?.email as string,
                        provider: account?.provider

                    }
                })

                if (existingUser) {
                    return true
                }

                await db.user.create({
                    data: {
                        email: profile?.email,
                        name: profile?.name,
                        image: profile?.avatar_url || profile?.picture,
                        emailVerified: new Date(),
                        provider: account?.provider
                    }
                })

                return true
            }
            return true;
        },
        async jwt({ token, user, account }) {
            if (user) {
                const currentUser = await db.user.findFirst({
                    where: {
                        email: user?.email as string,
                        provider: account?.provider,
                    }
                })
                token.user = currentUser
            }
            return token

        },
        async session({ token, session }) {
            session.user = token.user as User
            return session
        },
        redirect({ baseUrl }) {
            return baseUrl
        },
    },
    

})