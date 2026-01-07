import Link from "next/link";

import StickyNote from "./components/StickyNote";
import ScrapbookText from "./components/ScrapbookText";

import { getEvents } from "../../api";

export default async function Home() {
  const events = await getEvents();
  const nextEvent = events[0];
  return (
    <div
      className="w-full h-dvh bg-cover"
      style={{ backgroundImage: `url(/grid.png)` }}
    >
      <div className="absolute w-full h-fit top-1/6 left-0 flex flex-col gap-3 items-center justify-center">
        <img className="w-60" src="/self.png" />
        <h1 className="font-spg text-black text-[4rem] font-bold">
          Seattle Printers' Guild
        </h1>
      </div>
      <Link href="/schedule">
        <StickyNote className=" absolute -rotate-6 text-black top-8 left-12 bg-spg-yellow p-4 font-spg  text-2xl w-64 ">
          <div className="text-center font-black text-4xl">Upcoming events</div>
          <ul className="list-disc list-inside font-body font-bold text-sm">
            {events &&
              events.map((event, i) => {
                return (
                  <li
                    key={i}
                    className="pt-2"
                  >{`${event.title} @ ${event.locationName}`}</li>
                );
              })}
          </ul>
        </StickyNote>
      </Link>

      <div className="absolute right-4 top-8 w-1/3 h-1/2">
        <ScrapbookText text={"Upcoming event:"} />
        <div>
          <ScrapbookText
            className=" h-60"
            text={`${nextEvent?.title} ${
              nextEvent?.locationName ? `@ ${nextEvent.locationName}` : ""
            }`}
          />
        </div>
      </div>
      <div className="absolute bottom-4 w-full flex flex-row justify-between px-10 h-fit">
        <StickyNote className="grow-0  rotate-3 text-black font-bold text-center p-2 font-spg text-2xl bg-spg-pink w-64 ">
          Mailing list
        </StickyNote>
        <StickyNote className="grow-0 -rotate-2 text-center font-bold p-2 font-spg text-2xl  bg-spg-blue w-64 text-white">
          The Seattle Printers' Guild provides free workshops in the King County
          area.
        </StickyNote>
        <StickyNote className="grow-0  rotate-6 text-white font-bold text-center p-2 font-spg text-2xl bg-spg-green w-64 ">
          <div>
            If you want to support the Guild, donate to @shannon-kao on Venmo
            with the memo line "SPG"
          </div>
        </StickyNote>
      </div>
    </div>
  );
}
