"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { projectsData } from "@/utils/projects";

const Project = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  const formattedDate = currentDateTime.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const formattedTime = currentDateTime.toLocaleTimeString("en-US", {
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const handleProjectHover = (projectId: number | null) => {
    setHoveredProject(projectId);
  };

  return (
    <div className="flex lg:h-[100vh]">
      <div className="flex-1 p-8 hidden lg:block bg-[#F2F2F2] sticky left-0 top-0">
        <div className="flex justify-between">
          <h1 className="text-center text-[#808080] text-lg ">
            {formattedDate}
          </h1>
          <p className="text-center text-[#808080] text-lg ">{formattedTime}</p>
        </div>
        <div className="flex justify-center items-center h-full">
          {hoveredProject ? (
            <img
              width={500}
              src={
                projectsData.find((project) => project.id === hoveredProject)
                  ?.image
              }
              alt="Project Image"
            />
          ) : (
            <div className="flex justify-center items-center h-full">
              <p className="text-center text-[#808080] text-lg ">
                Hover over a <br />
                project for more.
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="flex-1 p-8 overflow-auto scrollbar-hide">
        <div className="flex justify-between  flex-1 py-10">
          <div className="flex flex-col gap-1 ">
            <h2 className="text-xl font-semibold">Projects</h2>
            <p className="text-lg ">Development & Design</p>
          </div>
          <div className="hidden lg:flex items-end flex-col gap-1 ">
            <h2 className="text-xl font-semibold">currently</h2>
            <div className="flex gap-2 items-center">
              <div className="bg-green-400 h-3 w-3 rounded-full"></div>
              <p className="text-lg ">looking for my next role</p>
            </div>
          </div>
        </div>
        <div>
          <ul>
            {projectsData.map((project) => (
              <li
                key={project.id}
                className={`py-4 flex justify-between items-center border-b hover:${project.color} hover:translate-x-2 hover:-translate-y-2 transition-transform duration-300 ease-in-out`}
                onMouseEnter={() => handleProjectHover(project.id)}
                onMouseLeave={() => handleProjectHover(null)}
              >
                <div>
                  <h2 id="projectheading" className="text-[20px]">
                    {project.name}
                  </h2>
                  <p className="text[12px]">{project.description}</p>
                </div>
                <div className="flex gap-6 items-center">
                  {hoveredProject !== project.id && (
                    <>
                      <p className="hidden lg:block text-[#aaaaaa]">
                        {project.type}
                      </p>
                      <p>{project.year}</p>
                    </>
                  )}
                  {hoveredProject === project.id && (
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={32}
                        height={32}
                        color={"#aaaaaa"}
                        fill={"none"}
                      >
                        <path
                          d="M17 7L6 18"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M11 6.13151C11 6.13151 16.6335 5.65662 17.4885 6.51153C18.3434 7.36645 17.8684 13 17.8684 13"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project;
