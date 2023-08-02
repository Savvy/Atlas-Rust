import { NextAuthOptions } from "next-auth";
import { NextRequest } from 'next/server';
import SteamProvider, { PROVIDER_ID } from './provider';
import { PrismaClient } from "@prisma/client";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

const prisma = new PrismaClient();

export const authOptions = (req: NextRequest | undefined): NextAuthOptions => {
    return {
        adapter: PrismaAdapter(prisma),
        providers: req ? [
            SteamProvider(req, {
                clientSecret: process.env.STEAM_SECRET!,
                callbackUrl: 'http://localhost:3000/api/auth/callback'
            })
        ] : [],
        secret: process.env.NEXTAUTH_SECRET!,
        session: {
            strategy: "database",
        },

        callbacks: {
            async session({ token, session }) {

                console.log(token);
                console.log(session);

                const prismaUser = await prisma.user.findUnique({
                    where: {
                        email: session.user?.email!,
                    },
                    include: {
                        accounts: true,
                    },
                });

                const steamAccount = prismaUser?.accounts.find(a => a.provider == "steam");

                /* // @ts-expect-error
                session.user.steamId = steamAccount?.providerAccountId; */
                return session;
            },
        },
    }
}