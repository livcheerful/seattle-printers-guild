import Navbar from "../components/Navbar";
import { getEvents } from "../../../api";
import Calendar from "../components/Calender";

export default async function Page({}) {
  const events = await getEvents();
  return (
    <div
      className="w-full h-dvh bg-cover"
      style={{ backgroundImage: `url(/grid.png)` }}
    >
      <Navbar />
      <div className="p-4 w-full">
        <Calendar events={events} />
      </div>
    </div>
  );
}
