import { getPageContentOnlyBySlug, getNavbar } from "../../../api";
import PostBody from "../components/PostBody";
import Navbar from "../components/Navbar";

export default async function Page({ params }) {
  const { slug } = await params;
  console.log("Slug:");
  console.log(slug);
  const page = await getPageContentOnlyBySlug(slug);
  console.log("PAGE:");
  console.log(page);
  console.log("----");
  if (!page) {
    return <div>Page not found</div>;
  }

  return (
    <div className="w-1/2 h-fit bg-white text-black text-center text-xl py-4 font-black">
      <PostBody content={page.pageContent} />
    </div>
  );
}
