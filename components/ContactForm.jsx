"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./ui/card";

import CardContainer from "./CardContainer";
import handleEmail from "@/lib/handleEmail";

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
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        damping: 50,
        stiffness: 80,
      }}
      className=" flex items-center justify-center pb-8 max-break-2:w-[400px]"
    >
      {complete === true ? (
        <CardContainer
          title={`Email Recieved`}
          description="Thanks for reaching out, I'll be in touch with you soon"
        />
      ) : (
        <CardContainer
          title="Contact Me"
          description="Let's get in touch!"
          className="max-break-2:w-[390px]"
        >
          <form
            className="space-y-4 text-center w-full"
            onSubmit={handleSubmit}
          >
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="h-12"
              required
            />
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="h-12 "
              required
            />
            <Input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject"
              className="h-12 "
              required
            />

            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message..."
              className="h-[200px] resize-none "
              required
            />
            {isLoading === false ? (
              <Button type="submit" variant="secondary" className="h-12 w-40">
                Send
              </Button>
            ) : (
              <Button disabled className="h-12 w-40 space-x-2">
                <Loader2 className="animate-spin" />
                <span>Sending Email</span>
              </Button>
            )}
          </form>
        </CardContainer>
      )}
    </motion.div>
  );
};

export default ContactForm;
