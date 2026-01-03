export default function LinkFeature({ block }) {
  return (
    <div className="my-4 border-2 border-black bg-white max-w-96">
      <img src={block.image?.url} />
      <h2 className="text-2xl p-4 font-bold mb-2  font-serif ">
        {block.title}
      </h2>
      <div className="px-4 font-sans">{block.description}</div>
      <div className="p-4">
        <a
          className=" text-white font-spg bg-green-700 hover:bg-green-800 font-medium rounded-full text-large px-5 py-2.5 text-center me-2 mb-4 mt-2"
          href={block.link}
          target="_blank"
        >
          Learn more
        </a>
      </div>
    </div>
  );
}
