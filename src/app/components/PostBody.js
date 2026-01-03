import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import LinkFeature from "./LinkFeature";

const customMarkdownOptions = (content) => ({
  renderMark: {
    [MARKS.BOLD]: (text) => <span className="font-bold">{text}</span>,
    [MARKS.ITALIC]: (text) => <span className="font-italic">{text}</span>,
  },
  renderNode: {
    [BLOCKS.HEADING_1]: (node, children) => {
      return (
        <div className={`flex justify-center`}>
          <div className={`leading-relaxed text-3xl`}>{children}</div>
        </div>
      );
    },

    [BLOCKS.HEADING_2]: (node, children) => {
      return (
        <div className={`flex justify-center`}>
          <div className={`leading-relaxed text-2xl`}>{children}</div>
        </div>
      );
    },

    [BLOCKS.HEADING_3]: (node, children) => {
      return (
        <div className={`flex justify-center`}>
          <div className={`leading-relaxed text-2xl`}>{children}</div>
        </div>
      );
    },
    [BLOCKS.HEADING_4]: (node, children) => {
      return (
        <div className={`flex justify-center`}>
          <div className={`leading-relaxed text-2xl`}>{children}</div>
        </div>
      );
    },
    [BLOCKS.HEADING_5]: (node, children) => {
      return (
        <div className={`flex justify-center`}>
          <div className={`leading-relaxed text-lg`}>{children}</div>
        </div>
      );
    },
    [BLOCKS.HEADING_6]: (node, children) => {
      return (
        <div className={`flex justify-center`}>
          <div className={`leading-relaxed text-md`}>{children}</div>
        </div>
      );
    },
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return (
        <div className={`flex justify-center`}>
          <div className={`leading-relaxed text-2xl`}>{children}</div>
        </div>
      );
    },
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const id = node.data.target.sys.id;
      const assets = content.links.assets.block;
      const asset = assets?.find((asset) => asset.sys.id === id);
      return <div className={`my-4 flex justify-center`}></div>;
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      const entry = content.links.entries;
      const id = node.data.target.sys.id;
      const block = entry.block?.find((block) => block.sys.id === id);
      if (!entry) return null;
      switch (block.__typename) {
        case "LinkFeature":
          return <LinkFeature block={block} />;
      }
    },
    [INLINES.HYPERLINK]: (node) => {
      return (
        <a
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline visited:text-purple-600 break-all"
          href={node.data.uri}
        >
          {node.content[0].value}
        </a>
      );
    },
  },
});

export default function PostBody({ content, className }) {
  return (
    <div className="flex flex-col items-center grow">
      <div className={`flex flex-col center  px-4 ${className}`}>
        {documentToReactComponents(
          content?.json,
          customMarkdownOptions(content)
        )}
      </div>
    </div>
  );
}
