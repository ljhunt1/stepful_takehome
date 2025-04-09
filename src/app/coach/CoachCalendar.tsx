"use client";

import { CoachSlot } from "@/app/coach/page";
import { formatPhoneNumber } from "@/lib/phoneNumberHelpers";
import moment from "moment";
import { Calendar, Event, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

export const CoachCalendar = (props: {
  slots: CoachSlot[];
  onSelectSlot: (slotId: number) => void;
}) => {
  const events: Event[] = props.slots.map((slot) => {
    return {
      start: slot.start,
      end: slot.end,
      title: slot.student
        ? `Session with ${formatPhoneNumber(slot.student.phoneNumber)}`
        : "Unclaimed slot",
      resource: {
        slotId: slot.id,
      },
    };
  });

  const onSelectEvent = (event: Event) => {
    console.log(event);
    return props.onSelectSlot(event.resource.slotId);
  };

  return (
    <Calendar
      events={events}
      localizer={localizer}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
      onSelectEvent={onSelectEvent}
    />
  );
};
