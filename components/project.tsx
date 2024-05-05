"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Project = () => {
  const projectsData = [
    {
      id: 1,
      name: "Project 1",
      description: "Description of Project 1",
      type: "Development",
      year: "2021",
      color: "#FFD700",
    },
    {
      id: 2,
      name: "Project 2",
      description: "Description of Project 2",
      type: "Development",
      year: "2021",
      color: "#FFD700",
    },
    {
      id: 3,
      name: "Project 3",
      description: "Description of Project 3",
      type: "Development",
      year: "2021",
      color: "#FFD700",
    },
  ];

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
          <p className="text-center text-[#808080] text-lg ">
            Hover over a <br />
            project for more.
          </p>
        </div>
      </div>
      <div className="flex-1 p-8 overflow-auto scrollbar-hide">
        <div className="flex justify-between  flex-1 py-10">
          <div className="flex flex-col gap-1 ">
            <h2 className="text-xl font-semibold">Projects</h2>
            <p className="text-lg ">Development & Design</p>
          </div>
          <div className="flex items-end flex-col gap-1 ">
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
                className="py-4 flex justify-between items-center border-b transition ease-in delay-150 hover:scale-110 duration-300"
              >
                <div>
                  <h2 id="projectheading" className="text-[20px]">
                    {project.name}
                  </h2>
                  <p className="text[12px]">{project.description}</p>
                </div>
                <div className="flex gap-6 ">
                  <p className="hidden lg:block text-[#aaaaaa]">
                    {project.type}
                  </p>
                  <p>{project.year}</p>
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
