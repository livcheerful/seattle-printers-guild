import "./globals.css";
import { getNavbar } from "../../api";
import Navbar from "./components/Navbar";
export const metadata = {
  title: "Seattle Printers' Guild",
  description: "Providing free printmaking workshops in the Seattle area.",
};

export default async function RootLayout({ children }) {
  const navBar = await getNavbar();
  return (
    <html lang="en" className=" bg-amber-100 text-black">
      <head></head>
      <body className={`antialiased bg-amber-100 text-black`}>{children}</body>
    </html>
  );
}
