import S3 from 'aws-sdk/clients/s3';
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../lib/prisma';

import { Image } from '@/types/image';
import { parse } from 'path';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const s3 = new S3({
    apiVersion: '2006-03-01',
  });

  
  //get all image ids with category id if it exists otherwise get all image ids
  const imageIds = await prisma.imageCategory.findMany({
    where: {
        categoryId: req.query.categoryId ? parseInt(req.query.categoryId as string) : undefined
    },
    select: {
        imageId: true,
    }
  });
}
