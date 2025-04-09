"use client";

import { CoachCalendar } from "@/app/coach/CoachCalendar";
import { ExistingSlotCard } from "@/app/coach/ExistingSlotCard";
import { CoachSlot } from "@/app/coach/page";
import { useState } from "react";

export const CoachClientside = (props: { slots: CoachSlot[] }) => {
  const { slots } = props;

  // editing/viewing a current slot
  const [selectedSlotId, setSelectedSlotId] = useState<null | number>(null);
  const selectedSlot = slots.find((slot) => slot.id === selectedSlotId);

  const onSelectSlot = (slotId: number) => {
    console.log(slotId);
    setSelectedSlotId(slotId);
  };

  return (
    <>
      <div>{JSON.stringify(slots)}</div>
      <CoachCalendar slots={slots} onSelectSlot={onSelectSlot} />
      {selectedSlot && <ExistingSlotCard slot={selectedSlot} />}
    </>
  );
};
