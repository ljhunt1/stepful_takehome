// seed data for the database. must run after prismaClient is generated
// Runs with ts-node, following https://www.prisma.io/docs/orm/prisma-migrate/workflows/seeding

// Absolute import otherwise ts-node gets confused. Apparently `tsconfig-paths`
// can fix this but that's too much work
import { PrismaClient } from "../src/(generated)/prismaClient";

const prisma = new PrismaClient();
async function main() {}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
