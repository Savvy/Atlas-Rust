import { getServerSession } from 'next-auth/next';
import { authOptions } from './auth';
import { DefaultSession } from 'next-auth/core/types';

export interface IntUserProp {
    steamId?: string
    discordId?: string
    id?: string
}

export type UserProps = DefaultSession["user"] & IntUserProp

export async function getCurrentUser(): Promise<UserProps | undefined> {
    // @ts-expect-error
    const session = await getServerSession(authOptions(undefined))
    return session?.user;
}