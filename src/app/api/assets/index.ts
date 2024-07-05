import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const assets = await prisma.asset.findMany();
    res.status(200).json(assets);
  } else if (req.method === 'POST') {
    const { name, symbol, imageUrl, price, hour, thour } = req.body;
    const newAsset = await prisma.asset.create({
      data: { name, symbol, imageUrl, price, hour, thour },
    });
    res.status(201).json(newAsset);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
