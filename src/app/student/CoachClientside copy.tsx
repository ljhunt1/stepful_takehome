"use client";

import { ClaimedStudentSlot, UnclaimedStudentSlot } from "@/app/student/page";

export const StudentClientside = (props: {
  claimedSlots: ClaimedStudentSlot[];
  unclaimedSlots: UnclaimedStudentSlot[];
  studentId: number;
}) => {
  return (
    <>
      {/* <StudentCalendar> shows slots, claimed and unclaimed. */}
      {/* Click a slot in the calendar to show a small html form for claiming the slot */}
    </>
  );
};
