"use client";

import { useState } from "react";
import { anton } from "@/lib/fonts";
import { motion } from "framer-motion";
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

    const response = await handleEmail({
      name,
      email,
      subject,
      message,
    });

    if (response) {
      setIsLoading(false);
      setComplete(true);
    }
  };

  return (
    <>
      {/* Form */}
      {!complete && (
        <form className="form" onSubmit={handleSubmit}>
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

          <button type="submit" className={`button ${anton.className}`}>
            Send
          </button>

          {/* Loading Animation */}
          {isLoading && <div className="form_loading" />}
        </form>
      )}

      {/* Success Message */}
      {complete && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="success"
        >
          <CheckCircledIcon width={80} height={80} color="#66fcf1" />
          <span className={`text-3xl text-center ${anton.className}`}>
            Thanks for reaching out, I'll be in touch shortly.
          </span>
        </motion.div>
      )}
    </>
  );
};

export default ContactForm;
