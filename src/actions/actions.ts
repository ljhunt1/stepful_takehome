"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const updateCoachSlot = async (args: {
  slotId: number;
  coachNotes: string;
  studentSatisfaction: number;
}) => {
  console.log("Updating slot");
  console.log(args);
  await prisma.slot.update({
    where: {
      id: args.slotId,
    },
    data: {
      coachNotes: args.coachNotes,
      studentSatisfcation: args.studentSatisfaction,
    },
  });

  revalidatePath("/coach");
  revalidatePath("/student");
};

export const createCoachSlot = async (args: {
  coachId: number;
  start: Date;
  end: Date;
}) => {
  console.log("Creating slot");
  console.log(args);
  await prisma.slot.create({
    data: {
      coachId: args.coachId,
      start: args.start,
      end: args.end,
    },
  });

  revalidatePath("/coach");
  revalidatePath("/student");
};
