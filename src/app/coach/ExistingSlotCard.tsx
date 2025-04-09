import { updateCoachSlot } from "@/actions/actions";
import { CoachSlot } from "@/app/coach/page";
import { formatPhoneNumber } from "@/lib/phoneNumberHelpers";

export const ExistingSlotCard = (props: { slot: CoachSlot }) => {
  const { slot } = props;
  const onSubmit = async (formData: FormData) => {
    console.log("Updating slot");
    console.log(formData);
    await updateCoachSlot({
      slotId: slot.id,
      coachNotes: formData.get("notes") as string,
      studentSatisfaction: Number(formData.get("satisfaction")),
    });
  };

  return (
    <form
      style={{ display: "flex", flexDirection: "column" }}
      action={onSubmit}
    >
      <h3>Edit existing slot</h3>
      <div>Start Time: {slot.start.toLocaleString()}</div>
      <div>End Time: {slot.end.toLocaleString()}</div>
      {slot.student && (
        <>
          <div>
            Student Phone Number: {formatPhoneNumber(slot.student.phoneNumber)}
          </div>
          {/* Todo make these inputs */}
          <label htmlFor="satisfaction">Student Satisfaction Score</label>
          <input
            type="text"
            name="satisfaction"
            placeholder="Number 1-5"
            defaultValue={slot.studentSatisfcation ?? ""}
          />
          <label htmlFor="notes">Notes</label>
          <input
            type="text"
            name="notes"
            placeholder="Type notes here"
            defaultValue={slot.coachNotes ?? ""}
          />
        </>
      )}
      <input type="submit" value="Update slot" />
    </form>
  );
};
