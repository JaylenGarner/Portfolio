import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Jaylen Garner",
  description: "Jaylen Garner's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={` ${inter.className}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
