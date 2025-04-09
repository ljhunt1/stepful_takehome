import { CoachClientside } from "@/app/coach/CoachClientside";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@/lib/prismaClient";

// don't cache this page
export const dynamic = "force-dynamic";
const COACH_ID = 1;

// fetch the slot data in the server component
export const getCoachSlots = async (args: { coachId: number }) => {
  return await prisma.slot.findMany({
    where: {
      coachId: args.coachId,
    },
    include: {
      student: {
        select: {
          phoneNumber: true,
        },
      },
    },
  });
};
// no idea if this is the idiomatic way to get the return type out of the Prisma SELECT call
// I do want this type to be dynamic when we change the db query
export type CoachSlot = Prisma.PromiseReturnType<typeof getCoachSlots>[number];

export default async function Home() {
  const slots = await getCoachSlots({ coachId: COACH_ID });

  return (
    <>
      <div>Hello coach {COACH_ID}</div>
      <CoachClientside slots={slots} />
    </>
  );
}

// Todo strip phone numbers in the db layer

// Requirements
// Coaches can add slots of availability to their calendars. These slots are always 2 hours long and each slot can be booked by exactly 1 student.
// Students can book upcoming, available slots for any coach.
// When a slot is booked, the student can view the coach's phone-number.
