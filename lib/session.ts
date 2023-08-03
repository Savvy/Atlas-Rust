import { getServerSession } from 'next-auth/next';
import { authOptions } from './auth';
import { NextRequest } from 'next/server';

export async function getCurrentUser() {
    // @ts-expect-error
    const session = await getServerSession(authOptions(undefined))

    return session?.user;
}