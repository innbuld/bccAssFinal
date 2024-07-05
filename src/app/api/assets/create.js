import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, symbol, imageUrl, price, hour, thour } = req.body;
    try {
      const newAsset = await prisma.asset.create({
        data: { name, symbol, imageUrl, price, hour, thour },
      });
      res.status(201).json(newAsset);
    } catch (error) {
      res.status(500).json({ error: 'Error creating asset' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
