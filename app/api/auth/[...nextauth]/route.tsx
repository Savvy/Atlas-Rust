import NextAuth from 'next-auth';
import { authOptions } from '@/lib/auth';
import type { NextApiRequest, NextApiResponse } from "next"

async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // @ts-ignore
    const options = authOptions(req);
    return await NextAuth(req, res, options)
}

export { handler as GET, handler as POST }