import NextAuth from 'next-auth/next'

import { authOptions } from '@/lib/auth';
import type { NextApiRequest, NextApiResponse } from "next"
import { NextRequest } from 'next/server';

async function handler(
    req: NextRequest,
    res: NextRequest
) {
    return await NextAuth(authOptions(req))
}

export { handler as GET, handler as POST }