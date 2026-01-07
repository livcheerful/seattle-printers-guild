import StickyNote from "./StickyNote";

export default function Calendar({ events }) {
  return (
    <div className="text-black flex flex-col items-center md:grid md:grid-cols-3 gap-10 md:gap-3">
      {events.map((e, i) => {
        const d = new Date(e.date);
        return (
          <div className="w-2/3 md:w-64 lg:w-80 relative" key={i}>
            {e.image?.url ? (
              <img
                className="rotate-3 drop-shadow-2xl"
                style={{ rotate: `${Math.random() * 20 - 10}deg` }}
                src={e.image.url}
              />
            ) : (
              <img
                className="rotate-3 drop-shadow-2xl"
                style={{ rotate: `${Math.random() * 20 - 10}deg` }}
                src={`/tall.png`}
              />
            )}
            <StickyNote className=" absolute text-black -bottom-8 -right-4 bg-spg-pink p-4 font-spg  text-2xl w-64 drop-shadow-2xl ">
              <div className="font-spg text-2xl font-black">{e.title}</div>
              <div className="font-body font-bold text-sm ">
                {e.description}
              </div>
              {e.linkOutText && (
                <a href={e.linkOutUrl}>
                  <div className="absolute right-0 bg-spg-green rotate-12 w-fit p-2 rounded-md font-spg text-2xl font-bold text-white drop-shadow-2xl">
                    {e.linkOutText}
                  </div>
                </a>
              )}
              <div>{`${d.getMonth().toLocaleString()} ${d.getDate()}`}</div>
            </StickyNote>
          </div>
        );
      })}
    </div>
  );
}
