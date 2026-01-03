export default function StickyNote({ className, children }) {
  return (
    <div className={`drop-shadow-lg min-h-20 ${className}`}>{children}</div>
  );
}
