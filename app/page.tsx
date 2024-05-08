import Education from "@/components/education";
import Header from "@/components/header";
import ProjectSection from "@/components/project";
import Tools from "@/components/tools";

const Home = () => {
  return (
    <div className="">
      <Header />
      <div className="lg:mx-14 mx-8 bg-gray-200 h-[1px]"></div>
      <Education />
      <div className="block lg:hidden lg:mx-14 mx-8 bg-gray-200 h-[1px]"></div>
      <ProjectSection />
      <Tools />
    </div>
  );
};

export default Home;
