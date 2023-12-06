"use client";

import Link from "next/link";
import { anton } from "@/lib/fonts";
import { motion } from "framer-motion";

const pages = [
  { page: "Home", path: "/" },
  { page: "Experience", path: "/Experience" },
  { page: "Projects", path: "/projects" },
];

const socials = [{ name: "", icon: "/postcss.config.js", url: "/" }];

const Navigation = () => {
  return (
    <motion.div
      className={`w-full absolute top-0 flex justify-center pt-8 ${anton.className} tracking-wider`}
    >
      {pages.map((page) => {
        return (
          <Link href={page.path} key={page.page}>
            <span className="text-2xl font-bold p-4">{page.page}</span>
          </Link>
        );
      })}

      {socials.map((social) => {
        return <Link href={social.url} key={social.name}></Link>;
      })}
    </motion.div>
  );
};

export default Navigation;
