export default function PrintPage({ children }) {
  return (
    <div className="bg-white w-full max-w-96 min-h-24 border-2 border-black">
      {children}
    </div>
  );
}
