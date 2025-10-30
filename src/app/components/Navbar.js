import Plate from "./Plate";
export default function Navbar({ nb }) {
  console.log(nb.pages);
  return (
    <div className="flex flex-row gap-4">
      {nb.pages.pages.map((p, i) => {
        console.log(p);
        return (
          <a href={p.slug} key={i}>
            <Plate title={p.title} color={p.color} />
            {p.plate}
          </a>
        );
      })}
    </div>
  );
}
