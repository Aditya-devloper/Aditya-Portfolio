"use client";

import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";

function Instructer() {
  const people = [
    {
      id: 1,
      name: "Eren Yeager",
      designation: "Attack Titan",
      image: "/eren.jpeg",
    },
    {
      id: 2,
      name: "Monkey D Luffy",
      designation: "Pirate King",
      image: "/luffy.jpg",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Data Scientist",
      image: "/next.svg",
    },
    {
      id: 4,
      name: "Taki",
      designation: "UX Designer",
      image: "/taki.png",
    },
    {
      id: 5,
      name: "Tyler Durden",
      designation: "Soap Developer",
      image: "window.svg",
    },
  ];

  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
      <WavyBackground className="max-w-4xl mx-auto">
        <h1 className="text-center text-4xl font-bold">Partners</h1>
        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
          Hero waves are cool
        </p>
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
          Leverage the power of canvas to create a beautiful hero section
        </p>
        <div className="flex flex-row items-center justify-center mt-10 w-full">
          <AnimatedTooltip items={people} />
        </div>
      </WavyBackground>
    </div>
  );
}

export default Instructer;
