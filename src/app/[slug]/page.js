import { getPageContentOnlyBySlug, getNavbar } from "../../../api";
import PostBody from "../components/PostBody";
import Navbar from "../components/Navbar";

export default async function Page({ params }) {
  const { slug } = await params;
  const page = await getPageContentOnlyBySlug(slug);
  if (!page) {
    return <div>Page not found</div>;
  }

  return (
    <div className="w-1/2 h-fit bg-white text-black text-center text-xl py-4 font-black">
      <PostBody content={page.pageContent} />
      {slug == "contact" && (
        <>
          Instagram
          <iframe
            src="https://www.instagram.com/seattleprintersguild/embed"
            width={300}
            height={400}
            scrolling="no"
            style={{
              marginLeft: "1rem",
              border: "1px solid #EEE",
              background: "white",
            }}
          />
          Email Newsletter
          <iframe
            src="https://seattleprintersguild.substack.com/embed"
            width={300}
            height={400}
            style={{
              marginLeft: "1rem",
              border: "1px solid #EEE",
              background: "white",
            }}
          />
        </>
      )}
    </div>
  );
}
