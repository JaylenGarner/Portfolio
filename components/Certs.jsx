"use client";

import certs from "@/lib/certs";
import CertCard from "./CertCard";
import { motion } from "framer-motion";

const Certs = () => {
  return (
    <motion.div
      className="feed"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        type: "spring",
        damping: 50,
        stiffness: 80,
      }}
    >
      {certs.map((cert) => {
        return <CertCard cert={cert} key={cert.name} />;
      })}
    </motion.div>
  );
};

export default Certs;
