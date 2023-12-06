"use client";

import Link from "next/link";
import { anton } from "@/lib/fonts";
import { motion } from "framer-motion";

const pages = [
  { page: "Home", path: "/" },
  { page: "Experience", path: "/experience" },
  { page: "Projects", path: "/projects" },
];

const socials = [{ name: "", icon: "/postcss.config.js", url: "/" }];

const Navigation = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={`w-full absolute top-0 flex justify-center pt-8 ${anton.className} tracking-wider z-50`}
    >
      {pages.map((page) => {
        return (
          <Link href={page.path} key={page.page}>
            <motion.span
              initial={{ color: "#66fcf1" }}
              whileHover={{ color: "#45A29E" }}
              transition={{ duration: 0.3 }}
              className="text-2xl font-bold p-4"
            >
              {page.page}
            </motion.span>
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
