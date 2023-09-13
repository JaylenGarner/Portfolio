import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const Bio = () => {
  return (
    <div className=" flex w-full items-center justify-center">
      <div className="flex flex-col">
        <span className="text-6xl font-bold">Jaylen Garner</span>
        <div className="flex space-x-4 items-center pt-2">
          <span className="text-3xl pr-2">Software Engineer</span>
          <LinkedInLogoIcon width={32} height={32} />
          <GitHubLogoIcon width={30} height={30} />
        </div>

        <p className=" pt-8 text-lg max-w-[600px] text-[#8AA3AD]">
          Hi, I'm Jaylen, a software engineer who loves crafting creative
          solutions. I specialize in developing software applications that blend
          design and functionality. With a passion for programming, I take pride
          in delivering high-quality work while continually enhancing my
          skillset.
        </p>
      </div>
    </div>
  );
};

export default Bio;
