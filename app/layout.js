import "./globals.css";
import Navigation from "@/components/Navigation";

import { Analytics } from "@vercel/analytics/react";

import { rubik } from "../lib/fonts";

export const metadata = {
  title: "Jaylen Garner",
  description: "Jaylen Garner's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`text-[#66fcf1] bg-black ${rubik.className} `}>
        <Navigation />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
