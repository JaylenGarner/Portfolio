"use client";

import { anton } from "@/lib/fonts";

const ContactFormNew = () => {
  return (
    <div className="w-[600px] flex justify-center bg-white rounded-lg text-[#1F2833]">
      <form className="flex_center  flex-col  w-full p-8">
        <h4 className={` text-3xl font-bold pb-4 ${anton.className}`}>
          Contact Me
        </h4>

        <input
          type="text"
          className="input"
          // value={name}
          // onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <input
          type="email"
          className="input"
          // value={name}
          // onChange={(e) => setName(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="text"
          className="input"
          // value={name}
          // onChange={(e) => setName(e.target.value)}
          placeholder="Subject"
          required
        />
        <textarea
          type="text"
          className="textarea"
          // value={name}
          // onChange={(e) => setName(e.target.value)}
          placeholder="Message..."
          required
        />

        <button
          className={`border p-2 rounded-lg  w-[200px] h-[60px] mt-4 font-bold bg-[#1F2833] text-[#66fcf1] text-lg hover:bg-[#45A29E] hover:text-[#1F2833] transition-colors duration-500 ${anton.className}`}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactFormNew;
