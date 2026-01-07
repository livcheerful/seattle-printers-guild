import Link from "next/link";
export default function Navbar({}) {
  return (
    <div className="flex flex-row gap-4 justify-center w-full p-5">
      <Link href="/">
        <img className="w-36" src="/head.png" />
      </Link>
    </div>
  );
}
