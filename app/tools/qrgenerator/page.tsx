"use client";
import React, { useState } from "react";
import CustomQRCode from "@/components/customeqr";

const QrCodeGenerator = () => {
  const [text, setText] = useState("");
  const [color, setColor] = useState("#000000");
  const [bodyPattern, setBodyPattern] = useState("square-dot");
  const [eyePattern, setEyePattern] = useState("dot");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  const handleBodyPatternChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBodyPattern(e.target.value);
  };

  const handleEyePatternChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEyePattern(e.target.value);
  };

  return (
    <div className="container py-20 lg:h-[70vh] flex justify-center items-center flex-col mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">QR Code Generator</h1>
      <div className="flex justify-between mb-4">
        <input
          type="text"
          value={text}
          onChange={handleInputChange}
          placeholder="Enter text or URL"
          className="p-2 border border-gray-300 focus:outline-none focus:border-black"
        />
        <input
          type="color"
          value={color}
          onChange={handleColorChange}
          className="p-2 border border-gray-300 h-12 focus:outline-none focus:border-black"
        />
      </div>
      <div className="flex  justify-between mb-4">
        <select
          value={bodyPattern}
          onChange={handleBodyPatternChange}
          className="p-2 border border-gray-300 focus:outline-none focus:border-black"
        >
          <option value="square-dot">Square Dot</option>
          <option value="circle">Circle</option>
          <option value="diamond">Diamond</option>
        </select>
        <select
          value={eyePattern}
          onChange={handleEyePatternChange}
          className="p-2 border border-gray-300 focus:outline-none focus:border-black"
        >
          <option value="dot">Dot</option>
          <option value="ring">Ring</option>
          <option value="rounded-square">Rounded Square</option>
        </select>
      </div>
      {text && (
        <div>
          <CustomQRCode
            value={text}
            fgColor={color}
            body={bodyPattern}
            eye={eyePattern}
          />
        </div>
      )}
    </div>
  );
};

export default QrCodeGenerator;
