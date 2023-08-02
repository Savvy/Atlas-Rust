import { getServerSession } from 'next-auth/next';
import { authOptions } from './auth';
import { NextRequest } from 'next/server';

export async function getCurrentUser(req: NextRequest) {
    const session = await getServerSession(authOptions(req))

    return session?.user;
}