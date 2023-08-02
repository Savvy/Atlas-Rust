import NextAuth from 'next-auth';
import { authOptions } from '@/lib/auth';
import type { NextApiRequest, NextApiResponse } from "next"

async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // @ts-ignore
    return await NextAuth(req, res, authOptions(req))
}

export {
    handler as GET,
    handler as POST
}



/* const handler = NextAuth(authOptions)

export {
    handler as GET,
    handler as POST
} */