import NextAuth from 'next-auth';
import { authOptions } from '@/lib/auth';
import type { NextApiRequest, NextApiResponse } from "next"
import { NextRequest } from 'next/server';

async function handler(
    req: NextRequest
) {
    // @ts-ignore
    const options = authOptions(req);
    return await NextAuth(options)
}

export { handler as GET, handler as POST }