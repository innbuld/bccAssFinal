import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const assets = [
  {
    id: 'BTC',
    name: 'Bitcoin',
    symbol: 'BTC/USD',
    imageUrl: '/Newbtc.png',
    price: 63000.0,
    thour: -2.21,
    hour: -1426.18,
  },
  { id: 'ETH', name: 'Ethereum', symbol: 'ETH/USD', imageUrl: '/Neweth.png', price: 3408.9, thour: -0.33, hour: -11.2 },
  { id: 'DOGE', name: 'Dogecoin', symbol: 'DOGE/USD', imageUrl: '/Newdog.png', price: 0.15, thour: 15.75, hour: 0.02 },
  { id: 'ALGO', name: 'Algorand', symbol: 'ALGO/USD', imageUrl: '/Newalgo.png', price: 0.15, thour: 0.0, hour: 0.0 },
  { id: 'DOT', name: 'Polkadot', symbol: 'DOT/USD', imageUrl: '/Newdot.png', price: 5.64, thour: 0.0, hour: 0.0 },
  { id: 'UNI', name: 'Uniswap', symbol: 'UNI/USD', imageUrl: '/ui.png', price: 9.79, thour: 0.0, hour: 0.0 },
  {
    id: 'COMP',
    name: 'Compound',
    symbol: 'COMP/USD',
    imageUrl: '/Newcomp.png',
    price: 45.67,
    thour: -0.95,
    hour: -0.44,
  },
];

export async function seedAssets() {
  for (const asset of assets) {
    await prisma.asset.upsert({
      where: { id: asset.id },
      update: asset,
      create: asset,
    });
  }
}

export async function disconnect() {
  await prisma.$disconnect();
}