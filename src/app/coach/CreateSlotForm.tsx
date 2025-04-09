import { createCoachSlot } from "@/actions/actions";
import moment from "moment";

export const CreateSlotForm = (props: { coachId: number }) => {
  const onSubmit = async (formData: FormData) => {
    console.log("Creating slot");
    console.log(formData);
    const startDate = new Date(formData.get("start") as string);
    const endDate = moment(startDate).add(2, "h").toDate();
    await createCoachSlot({
      coachId: props.coachId,
      start: startDate,
      end: endDate,
    });
  };

  return (
    <form
      style={{ display: "flex", flexDirection: "column" }}
      action={onSubmit}
    >
      <h3>Create a slot:</h3>
      <label htmlFor="start">Start</label>
      <input type="datetime-local" name="start" />
      <div>Ends 2hr after start</div>
      <input type="submit" value="Create slot" />
    </form>
  );
};
