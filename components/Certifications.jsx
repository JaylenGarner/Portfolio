"uce client";

import certifications from "@/lib/certifications";
import { anton } from "@/lib/fonts";
import { motion } from "framer-motion";
import { useState } from "react";

const Certifications = () => {
  const [currentCertification, setCurrentCertification] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = (certification) => {
    console.log("IN OPEN MODAL", certification);
    setCurrentCertification(certification);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentCertification(null);
  };

  console.log(currentCertification);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
      className="flex_center flex-col pb-32"
    >
      <h2 className={`heading ${anton.className} pb-16 `}>Certifications</h2>

      <div className="flex_center flex-wrap">
        {certifications.map((certification) => {
          return (
            <motion.div
              className="w-52 m-4"
              key={certification.name}
              onClick={() => openModal(certification)}
            >
              <img
                src={certification.logo.url}
                className="hover:opacity-70 transition-opacity duration-300 hover:cursor-pointer"
              />
            </motion.div>
          );
        })}
      </div>

      {modalIsOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          onClick={() => closeModal()}
          className="fixed top-0 left-0 h-screen w-full flex items-center justify-center bg-black bg-opacity-60 z-50"
        >
          <img
            src={currentCertification.certificate.url}
            onClick={(e) => e.stopPropagation()}
            className="z-40 w-[1000px] rounded-xl"
          />
        </motion.div>
      )}
    </motion.div>
  );
};

export default Certifications;
