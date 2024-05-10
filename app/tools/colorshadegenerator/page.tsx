"use client";
import React, { useState } from "react";

const ColorShadesTool = () => {
  const [baseColor, setBaseColor] = useState("");
  const [shades, setShades] = useState<string[]>([]); // Specify the type as an array of strings

  const generateShades = () => {
    const color = baseColor.startsWith("#") ? baseColor : `#${baseColor}`;
    const baseHex = color.slice(1);
    const baseRGB = [
      parseInt(baseHex.substring(0, 2), 16),
      parseInt(baseHex.substring(2, 4), 16),
      parseInt(baseHex.substring(4, 6), 16),
    ];

    const shadeVariations = [
      0.6, 0.5, 0.4, 0.3, 0.2, 0.1, -0.1, -0.2, -0.3, -0.4, -0.5,
    ];

    const generatedShades = shadeVariations.map((shade) => {
      const newRGB = baseRGB.map((channel) =>
        Math.round(channel * (1 + shade))
      );
      const newHex = newRGB
        .map((channel) => Math.max(0, Math.min(255, channel)))
        .map((channel) => channel.toString(16).padStart(2, "0"))
        .join("");
      return `#${newHex}`;
    });

    setShades(generatedShades);
  };

  return (
    <div className="container py-20 lg:h-[70vh] flex justify-center items-center flex-col mx-auto mt-8">
      <div className="max-w-2xl px-6 mx-auto  md:mt-16 md:mb-12 mb-6">
        <div className="text-center md:mb-0">
          <h1 className="text-3xl md:text-5xl tracking-tight font-bold text-color font-display">
            Color Shades Generator
          </h1>
          <p className="text-color-muted md:text-lg mt-4 hidden md:block leading-normal">
            Press spacebar, enter a hexcode or change the HSL values to create a
            custom color scale
          </p>
          <p className="text-color-muted md:text-lg mt-4 md:hidden">
            Enter a hexcode to create a custom color scale
          </p>
        </div>
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter color code (e.g., #000000)"
          value={baseColor}
          onChange={(e) => setBaseColor(e.target.value)}
          className="p-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={generateShades}
          className="ml-2 px-4 py-2 bg-black text-white rounded-md mb-8"
        >
          Generate Shades
        </button>
      </div>
      <div className="max-w-5xl px-6 pb-12 w-full mx-auto space-y-8">
        <div className="color-family-outline  flex flex-col md:flex-row overflow-hidden relative md:space-x-1 space-y-1 md:space-y-0 rounded-lg">
          {shades.map((shade, index) => (
            <div
              key={index}
              className="h-14 md:h-28 w-full rounded-lg p-2 md:p-4 flex justify-end items-center flex-col relative"
              style={{ backgroundColor: shade }}
            >
              <p className="text-xs text-white">{shade}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorShadesTool;
