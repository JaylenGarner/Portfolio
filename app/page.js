"use client";

import Bio from "@/components/Bio";
import Feed from "@/components/Feed";

const Home = () => {
  return (
    <main className="grid grid-cols-2 max-tablet:grid-cols-1 gap-x-10 pr-4 pl-4">
      {/* Desktop */}
      <div className="max-tablet:justify-center  w-full flex justify-end items-start pt-8 tablet:h-screen tablet:overflow-scroll no-scrollbar pr-5 pl-5 ">
        <Bio />
      </div>

      <div className="max-tablet:justify-center w-full flex justify-start items-start pt-8 tablet:h-screen tablet:overflow-scroll no-scrollbar pr-5 pl-5">
        <Feed />
      </div>
    </main>
  );
};

export default Home;
