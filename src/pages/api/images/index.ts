import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../../lib/prisma';
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
  console.log('getImagesByCategory', req.query.categoryId);
    const data = await prisma?.imageCategory.findMany(
        {
          where: {
            categoryId: parseInt(req.query.categoryId as string)
          },
        }
    );
    res.status(200).json(data);
}