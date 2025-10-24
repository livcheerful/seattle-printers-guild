export default function Plate({ title, color }) {
  return (
    <div
      style={{ backgroundColor: color }}
      className="border-4 border-b-0 border-black py-2 px-5 text-white rounded-t-md text-2xl"
    >
      {title}
    </div>
  );
}
