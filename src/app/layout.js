import "./globals.css";
import { getNavbar } from "../../api";
import Navbar from "./components/Navbar";
export const metadata = {
  title: "Seattle Printers' Guild",
  description: "A collective of printmakers in Seattle, WA.",
};

export default async function RootLayout({ children }) {
  const navBar = await getNavbar();
  return (
    <html lang="en" className=" bg-amber-100 text-black">
      <head></head>
      <body className={`antialiased bg-amber-100 text-black`}>
        <div className="bg-amber-100 text-black flex flex-col pt-2 items-center py-2 overflow-hidden">
          <img src="/self.png" className="fixed -right-3 top-1/2 w-64" />
          <Navbar nb={navBar} />
          {children}
          <img src="/head.png" className="fixed left-3 top-3 w-52" />
        </div>
      </body>
    </html>
  );
}
