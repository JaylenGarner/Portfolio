"use client";

import { useState } from "react";
import { anton } from "@/lib/fonts";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import handleEmail from "@/lib/handleEmail";
import { CheckCircledIcon } from "@radix-ui/react-icons";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [complete, setComplete] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = {
      name,
      email,
      subject,
      message,
    };

    const response = await handleEmail(formData);

    if (response) {
      setIsLoading(false);
      setComplete(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-8"
    >
      {!complete && (
        <div className="w-[600px] flex justify-center bg-[#1F2833] rounded-xl text-[#66fcf1] mt-8 border-2 border-[#1F2833]">
          <form
            className="flex_center  flex-col  w-full p-8"
            onSubmit={handleSubmit}
          >
            <h4 className={` text-3xl font-bold pb-4 ${anton.className}`}>
              Contact Me
            </h4>

            <input
              type="text"
              className="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              required
            />
            <input
              type="email"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <input
              type="text"
              className="input"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject"
              required
            />
            <textarea
              type="text"
              className="textarea"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message..."
              required
            />

            {!isLoading ? (
              <button type="submit" className={`button ${anton.className}`}>
                Send
              </button>
            ) : (
              <button
                type="submit"
                disabled
                className={`button_loading ${anton.className}`}
              >
                <Loader2 className="animate-spin" size={30} color="#1F2833" />
              </button>
            )}
          </form>
        </div>
      )}

      {complete && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex_center flex-col space-y-8 "
        >
          <CheckCircledIcon width={80} height={80} color="#66fcf1" />
          <span className={`text-3xl ${anton.className}`}>
            Thanks for reaching out, I'll be in touch shortly.
          </span>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ContactForm;
