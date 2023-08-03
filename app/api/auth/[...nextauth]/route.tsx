import NextAuth from 'next-auth';
import { authOptions } from '@/lib/auth';
import type { NextApiRequest, NextApiResponse } from "next"
import { NextRequest } from 'next/server';

async function handler(
    req: NextApiRequest & { url: string },
    res: NextApiResponse
) {
    return await NextAuth(req, res, authOptions(req))
}

export { handler as GET, handler as POST }