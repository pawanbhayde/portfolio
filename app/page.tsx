"use client";

import { cn } from "@/lib/utils";
import DotPattern from "@/components/magicui/dot-pattern";
import Education from "@/components/education";
import Header from "@/components/header";
import ProjectSection from "@/components/project";
import Tools from "@/components/tools";
import Experience from "@/components/experience";

const Home = () => {
  return (
    <div className="">
      <div>
        <Header />
        <div className="lg:mx-14 mx-8 bg-gray-200 h-[1px]"></div>
        <Experience />
        <div className="lg:mx-14 mx-8 bg-gray-200 h-[1px]"></div>
        <Education />
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
          )}
        />
      </div>
      <div className="block lg:hidden lg:mx-14 mx-8 bg-gray-200 h-[1px]"></div>
      <ProjectSection />
      <Tools />
    </div>
  );
};

export default Home;
