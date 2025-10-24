"use client";

import Plate from "./components/Plate";
import PrintPage from "./components/PrintPage";
import { useState } from "react";

const pages = [
  {
    plate: <Plate title="HOME" color="#439846" />,
    printPage: (
      <div className="min-h-screen">
        <h1 className="text-3xl">This is Scribble Scrapple</h1>
      </div>
    ),
  },
  {
    plate: <Plate title="EVENTS" color="#E24532" />,
    printPage: (
      <div className="min-h-screen">
        <h1 className="text-3xl pb-4">Events</h1>
        <div>
          <h2 className="text-2xl">Upcoming</h2>
          <div className="grid grid-cols-4 p-2 gap-2">
            <div className="border-2 border-black  rounded-md">
              <div className="h-44"></div>
              <div>November</div>
            </div>
            <div className="border-2 border-black  rounded-md">
              <div className="h-44"></div>
              <div>December</div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl">Past</h2>
          <div className="grid grid-cols-4 p-2 gap-2">
            <div className="border-2 border-black  rounded-md">
              <div className="h-44"></div>
              <div>Screenprinting</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    plate: <Plate title="CONTACT" color="#DE98B4" />,
    printPage: (
      <div className="min-h-screen">
        <h1 className="text-3xl">Contact</h1>
      </div>
    ),
  },
];

export default function Home() {
  const [selectedPageIndex, setSelectedPageIndex] = useState(undefined);
  return (
    <div className="bg-amber-100 text-black flex flex-col pt-2 items-center py-2 overflow-hidden">
      <img src="/self.png" className="fixed -right-3 top-1/2 w-64" />
      <div className="flex flex-row gap-4">
        {pages.map((p, i) => {
          return (
            <button
              onClick={() => {
                setSelectedPageIndex(i);
              }}
              key={i}
            >
              {p.plate}
            </button>
          );
        })}
      </div>
      <div className="w-1/2 h-fit bg-white text-black text-center text-xl py-4 font-black">
        {selectedPageIndex != undefined && pages[selectedPageIndex].printPage}
      </div>
      <img src="/head.png" className="fixed left-3 top-3 w-52" />
    </div>
  );
}
