import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma';
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const data = await prisma?.category.findMany();
    console.log(data);
    res.status(200).json(data);
}