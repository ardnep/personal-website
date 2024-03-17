import Image from "next/image";

import { IBM_Plex_Mono } from "next/font/google";
import { FiGithub, FiMail } from "react-icons/fi";
import { RiLinkedinFill } from "react-icons/ri";
import classnames from "classnames";

const font = IBM_Plex_Mono({ subsets: ["latin"], weight: "300" });

const Hero: React.FC = () => {
  return (
    <section className="h-[100vh] pt-[calc(var(--navbar-height)+5%)]">
      <div className="pt-12 flex flex-col items-start gap-12 h-full">
        {/* <Image src="/barcode.svg" alt="barcode" width={200} height={100} /> */}
        <div className="flex flex-col gap-2">
          <h1 className={classnames("md:text-7xl text-6xl", font.className)}>
            Aaradh Nepal
          </h1>
          <p className="font-semibold text-[color:rgb(var(--secondary-rgb))] md:text-2xl text-xl mb-0">
            Software Engineer <span>&bull;</span> Student
          </p>
        </div>
        <div className="flex flex-row item-center content-center md:gap-8 gap-4 [&>*]:md:text-3xl [&>*]:text-2xl">
          <a href="https://github.com/ardnep" target="_blank">
            <FiGithub />
          </a>
          <a href="https://www.linkedin.com/in/aaradh-nepal/" target="_blank">
            <RiLinkedinFill />
          </a>
          <a href="mailto:aaradhnep@gmail.com">
            <FiMail />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
