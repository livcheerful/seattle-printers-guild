import { getHomepage, getNavbar } from "../../api";
import PostBody from "./components/PostBody";
import Navbar from "./components/Navbar";

export default async function Home() {
  const page = await getHomepage();
  if (!page) {
    return <div>Homepage not found</div>;
  }

  return (
    <div className="w-1/2 h-fit bg-white text-black text-center text-xl py-4 font-black">
      <PostBody content={page.pageContent} />
    </div>
  );
}
