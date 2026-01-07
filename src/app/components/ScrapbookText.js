export default function ScrapbookText({ text, className }) {
  function textToScrapbook(text) {
    return text.split("").map((char, i) => {
      if (char == " ") return <div key={i}></div>;
      return (
        <img
          key={i}
          className="min-w-0 shrink"
          style={{ rotate: `${Math.random() * 10 - 5}deg` }}
          src={`/letter/${char}.png`}
        />
      );
    });
  }
  return (
    <div
      className={`w-full grow-0 text-black grid gap-0 ${className} `}
      style={{
        gridTemplateColumns: "repeat(20, minmax(0, 1fr))",
      }}
    >
      {textToScrapbook(text)}
    </div>
  );
}
