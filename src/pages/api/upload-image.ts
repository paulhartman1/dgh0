import S3 from 'aws-sdk/clients/s3'
import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'
import { v4 as uuidv4 } from 'uuid'

import { Image } from '@/types/image'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    console.log('jdklasjfladsjflkdasjflkadsjflkasdjfklads');
    const s3 = new S3({
      apiVersion: '2006-03-01',
    })
    const id = uuidv4()
    await createImageData(id, req)
    
    const post = await s3.createPresignedPost({
      Bucket: process.env.BUCKET_NAME,
      Fields: {
        key: id,
        'Content-Type': req.query.fileType,
      },
      Expires: 60, // seconds
      Conditions: [
        ['content-length-range', 0, 1048576], // up to 1 MB
      ],
    })

  
    res.status(200).json(post)
  }

async function createImageData(id: string, req: NextApiRequest) {
  try {
    const image: Image = await prisma.image.create({
      data: {
        id: id,
        name: req.query.file as string,
        type: req.query.fileType as string,
      },
    })
  } catch (error) {
    console.error(error)
  }
}

async function linkImageAndCategory(imageId: string, categoryId: number) {
  await prisma.imageCategory.create({
    data: {
      imageId: imageId,
      categoryId: categoryId,
    },
  });
}
