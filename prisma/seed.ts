// seed data for the database. must run after prismaClient is generated
// Runs with ts-node, following https://www.prisma.io/docs/orm/prisma-migrate/workflows/seeding

// Relative import otherwise ts-node gets confused. Apparently `tsconfig-paths`
// can fix this but that's too much work
import { prisma } from "../src/lib/prisma";

async function main() {
  // Seed coaches
  const coachGoldmill = await prisma.coach.upsert({
    where: { id: 1 },
    update: {},
    create: {
      firstName: "Mickey",
      lastName: "Goldmill",
      phoneNumber: "3111111111",
    },
  });
  const coachMiyagi = await prisma.coach.upsert({
    where: { id: 2 },
    update: {},
    create: {
      firstName: "Nariyoshi",
      lastName: "Miyagi",
      phoneNumber: "3222222222",
    },
  });
  const coachYoda = await prisma.coach.upsert({
    where: { id: 3 },
    update: {},
    create: {
      firstName: "Jedi",
      lastName: "Yoda",
      phoneNumber: "3333333333",
    },
  });

  // Seed students
  const studentBalboa = await prisma.student.upsert({
    where: { id: 1 },
    update: {},
    create: {
      firstName: "Rocky",
      lastName: "Balboa",
      phoneNumber: "4111111111",
    },
  });
  const studentLaRusso = await prisma.student.upsert({
    where: { id: 2 },
    update: {},
    create: {
      firstName: "Daniel",
      lastName: "LaRusso",
      phoneNumber: "4222222222",
    },
  });
  const studentLuke = await prisma.student.upsert({
    where: { id: 3 },
    update: {},
    create: {
      firstName: "Luke",
      lastName: "Skywalker",
      phoneNumber: "4333333333",
    },
  });
  const studentKenobi = await prisma.student.upsert({
    where: { id: 4 },
    update: {},
    create: {
      firstName: "Obi-Wan",
      lastName: "Keboni",
      phoneNumber: "4444444444",
    },
  });
  const studentWindu = await prisma.student.upsert({
    where: { id: 5 },
    update: {},
    create: {
      firstName: "Mace",
      lastName: "Windu",
      phoneNumber: "4555555555",
    },
  });

  // Seed slots
  const unclaimedSlot1 = await prisma.slot.upsert({
    where: { id: 1 },
    update: {},
    create: {
      start: new Date("2025-04-08T15:00:00Z"),
      end: new Date("2025-04-08T17:00:00Z"),
      coachId: 1,
    },
  });
  const unclaimedSlot2 = await prisma.slot.upsert({
    where: { id: 2 },
    update: {},
    create: {
      start: new Date("2025-04-08T09:00:00Z"),
      end: new Date("2025-04-08T11:00:00Z"),
      coachId: 2,
    },
  });
  const claimedSlot1 = await prisma.slot.upsert({
    where: { id: 3 },
    update: {},
    create: {
      start: new Date("2025-04-12T10:00:00Z"),
      end: new Date("2025-04-12T12:00:00Z"),
      coachId: 1,
      studentId: 1,
    },
  });
  const claimedSlot2 = await prisma.slot.upsert({
    where: { id: 4 },
    update: {},
    create: {
      start: new Date("2025-04-11T20:00:00Z"),
      end: new Date("2025-04-11T22:00:00Z"),
      coachId: 2,
      studentId: 2,
    },
  });
  const claimedSlotWithFeedback1 = await prisma.slot.upsert({
    where: { id: 5 },
    update: {},
    create: {
      start: new Date("2025-04-06T12:00:00Z"),
      end: new Date("2025-04-06T14:00:00Z"),
      coachId: 2,
      studentId: 2,
      studentSatisfcation: 4,
      coachNotes: "Never put passion in front of principle.",
    },
  });
  const claimedSlotWithFeedback2 = await prisma.slot.upsert({
    where: { id: 6 },
    update: {},
    create: {
      start: new Date("2025-04-08T13:00:00Z"),
      end: new Date("2025-04-08T15:00:00Z"),
      coachId: 1,
      studentId: 2,
      studentSatisfcation: 2,
      coachNotes: "It aint about how hard you hit.",
    },
  });

  console.log({
    coachGoldmill,
    coachMiyagi,
    coachYoda,
    studentBalboa,
    studentKenobi,
    studentLaRusso,
    studentLuke,
    studentWindu,
    unclaimedSlot1,
    unclaimedSlot2,
    claimedSlot1,
    claimedSlot2,
    claimedSlotWithFeedback1,
    claimedSlotWithFeedback2,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
