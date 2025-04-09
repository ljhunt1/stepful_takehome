"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const updateSlot = async (args: {
  slotId: number;
  coachNotes: string;
  studentSatisfaction: number;
}) => {
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
