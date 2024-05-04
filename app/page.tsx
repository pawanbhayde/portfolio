import Education from "@/components/education";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import ProjectSection from "@/components/project";
import Project from "@/components/project";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Header />
      <div className="lg:mx-14 mx-8 bg-gray-200 h-[1px]"></div>
      <Education />
      <ProjectSection />
    </div>
  );
};

export default Home;
