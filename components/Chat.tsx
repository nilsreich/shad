export const Chat = () => {
  return (
    <div className="border-l flex flex-col gap-2 p-2 h-screen">
      <div className="text-sm rounded p-2 border">
        <div className="font-medium">You</div>
        <div>Was sind Extremwertaufgaben?</div>
      </div>
      <div className="text-sm bg-neutral-100 rounded p-2 border">
        <div className="font-medium">AI</div>
        <div>
          Explanation: Event: Represents an individual event with properties
          like id, title, description, startTime, and endTime. You can also add
          any additional properties specific to your events, such as location,
          attendees, or color. EventsByDate: This interface defines a mapping
          from dates (as strings) to an array of events. This allows you to
          group events by date efficiently. CalendarData: This interface
          represents the overall calendar data structure. It's a nested object
        </div>
      </div>
    </div>
  );
};
