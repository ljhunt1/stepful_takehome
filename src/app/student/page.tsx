import { StudentClientside } from "@/app/student/CoachClientside copy";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@/lib/prismaClient";

// don't cache this page
export const dynamic = "force-dynamic";
const STUDENT_ID = 1;

export const getUnclaimedSlots = async () => {
  return await prisma.slot.findMany({
    where: {
      studentId: null,
    },
    select: {
      start: true,
      end: true,
    },
  });
};
// no idea if this is the idiomatic way to get the return type out of the Prisma SELECT call
// I do want this type to be dynamic when we change the db query
export type UnclaimedStudentSlot = Prisma.PromiseReturnType<
  typeof getUnclaimedSlots
>[number];

export const getClaimedSlots = async (args: { studentId: number }) => {
  return await prisma.slot.findMany({
    where: {
      studentId: args.studentId,
    },
    select: {
      start: true,
      end: true,
      coach: {
        select: {
          phoneNumber: true,
        },
      },
    },
  });
};
export type ClaimedStudentSlot = Prisma.PromiseReturnType<
  typeof getClaimedSlots
>[number];

export default async function Home() {
  const unclaimedSlots = await getUnclaimedSlots();
  const claimedSlots = await getClaimedSlots({ studentId: STUDENT_ID });

  return (
    <>
      <StudentClientside
        studentId={STUDENT_ID}
        unclaimedSlots={unclaimedSlots}
        claimedSlots={claimedSlots}
      />
    </>
  );
}
