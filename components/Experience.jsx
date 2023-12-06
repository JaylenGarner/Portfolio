import { anton } from "@/lib/fonts";
import experiences from "@/lib/experiences";
import Link from "next/link";

const WorkExperience = () => {
  return (
    <div className="flex_center flex-col pb-16">
      <h1 className={`heading pb-16 ${anton.className}`}>Work Experience</h1>
      <div className="flex flex-col space-y-16">
        {experiences.map((experience) => {
          return (
            <div className="w-[820px]">
              <div className="flex justify-between items-center pb-8">
                <div className="space-y-4 flex flex-col ">
                  <h3 className={` text-4xl  ${anton.className}`}>
                    {experience.title}
                  </h3>

                  <span className={` text-3xl ${anton.className}`}>
                    {experience.company}
                  </span>
                  <span className={` text-2xl ${anton.className}`}>
                    {experience.timeframe}
                  </span>
                </div>

                <Link href={experience.url}>
                  <img
                    src={experience.logo.src}
                    className={`w-[130px] mr-[80px] hover:opacity-70 transition-opacity duration-300 `}
                  />
                </Link>
              </div>
              <span className="text-2xl w-full">{experience.description}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkExperience;
