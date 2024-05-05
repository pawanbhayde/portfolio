import Education from "@/components/education";
import Footer from "@/components/footer";
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
      <div className="block lg:hidden lg:mx-14 mx-8 bg-gray-200 h-[1px]"></div>
      <ProjectSection />
      <Footer />
    </div>
  );
};

export default Home;
