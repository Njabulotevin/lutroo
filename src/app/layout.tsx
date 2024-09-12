import "./globals.css";
import { Sora } from "next/font/google";
import Link from "next/link";
import { AlignRight } from "lucide-react";
import NavBar from "./NavBar";

const poppins = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Lutroo",
  description:
    "Lutroo Health and Wellness"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ overflowX: "hidden" }} className={poppins.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
