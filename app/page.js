"use client";

import Bio from "@/components/Bio";
import Feed from "@/components/Feed";

const Home = () => {
  return (
    <main className="grid grid-cols-2 gap-x-10 pr-4 pl-4">
      <div className="w-full flex justify-end items-start pt-8 h-screen overflow-scroll no-scrollbar pr-5 pl-5 ">
        <Bio />
      </div>

      <div className="w-full flex justify-start items-start pt-8 h-screen overflow-scroll no-scrollbar pr-5 pl-5">
        <Feed />
      </div>
    </main>
  );
};

export default Home;
