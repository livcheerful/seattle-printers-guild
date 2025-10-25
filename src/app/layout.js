import "./globals.css";

export const metadata = {
  title: "Seattle Printers' Guild",
  description: "A collective of printmakers in Seattle, WA.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=" bg-amber-100 text-black">
      <head></head>
      <body className={`antialiased bg-amber-100 text-black`}>{children}</body>
    </html>
  );
}
