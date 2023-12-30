"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
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
    <div className="tablet:pb-20 flex items-center justify-center pb-2 pt-2 max-break-2:w-[400px] max-tablet:pt-8 max-tablet:w-[600px] max-mobile_md:w-[400px] max-mobile_sm:w-[320px]">
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
            className="space-y-4 text-center w-full "
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

            <div className="w-full flex justify-center pt-2">
              {isLoading === false ? (
                <button className="button hover:bg-white hover:text-black transition-all duration-300">
                  Send
                </button>
              ) : (
                <button className="button bg-white" disabled>
                  <Loader2 className="text-black animate-spin" />
                </button>
              )}
            </div>
          </form>
        </CardContainer>
      )}
    </div>
  );
};

export default ContactForm;
