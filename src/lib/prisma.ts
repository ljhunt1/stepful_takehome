// recommended by prisma docs for ensuring there's one client globally
// https://www.prisma.io/docs/orm/more/help-and-troubleshooting/nextjs-help#recommended-solution

import { PrismaClient } from "./prismaClient";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
