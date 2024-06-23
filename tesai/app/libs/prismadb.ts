// lib/prismadb.ts
import { PrismaClient } from '@prisma/client';

// Declare the global type for the Prisma client to avoid TypeScript errors
declare global {
    // eslint-disable-next-line no-var
    var prisma: PrismaClient | undefined;
}

const prisma = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma;

export default prisma;
