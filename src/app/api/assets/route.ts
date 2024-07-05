import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const assets = await prisma.asset.findMany();
  return NextResponse.json(assets);
}

export async function POST(req: NextRequest) {
  const { name, symbol, imageUrl, price, hour, thour } = await req.json();
  const newAsset = await prisma.asset.create({
    data: { name, symbol, imageUrl, price, hour, thour },
  });
  return NextResponse.json(newAsset, { status: 201 });
}
