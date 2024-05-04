"use client";
import { useEffect, useState } from "react";

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

  return (
    <div className="flex h-[100vh]">
      <div className="flex-1 p-8 hidden lg:block bg-[#F2F2F2] sticky left-0 top-0">
        <div className="flex justify-between">
          <h1 className="text-center text-[#808080] text-lg ">
            {formattedDate}
          </h1>
          <p className="text-center text-[#808080] text-lg ">
            {formattedTime}
          </p>
        </div>
        <div className="flex justify-center items-center h-full">
          <p className="text-center text-[#808080] text-lg ">
            Hover over a <br />
            project for more.
          </p>
        </div>
      </div>
      <div className="flex-1 p-8 overflow-auto scrollbar-hide">
        <div className="flex flex-col gap-1">
          <h1>Pawan Bhayde</h1>
          <p>Developer and Designer</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
