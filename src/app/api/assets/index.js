import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { id } = req.query;

  try {
    const asset = await prisma.asset.findUnique({
      where: { id: String(id) },
    });

    if (!asset) {
      return res.status(404).json({ error: 'Asset not found' });
    }

    res.status(200).json(asset);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching asset' });
  } finally {
    await prisma.$disconnect();
  }
}
