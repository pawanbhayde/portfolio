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
      0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, -0.1, -0.2, -0.3, -0.4, -0.5,
      -0.6, -0.7, -0.8, -0.9,
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
      <h1 className="text-2xl font-bold mb-4">Color Shades Generator</h1>
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
          className="ml-2 px-4 py-2 bg-black text-white rounded-md"
        >
          Generate Shades
        </button>
      </div>
      <div className="flex lg:w-5/12 w-10/12 flex-wrap mt-4">
        {shades.map((shade, index) => (
          <div
            key={index}
            className="w-16 h-16 mr-2 mb-2"
            style={{ backgroundColor: shade }}
          >
            <p className="text-xs text-white">{shade}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorShadesTool;
