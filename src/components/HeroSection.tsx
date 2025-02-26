"use client";

import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { motion } from "framer-motion";
import { FlipWords } from "./ui/flip-words";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

function HeroSection() {
  const words = ["faster", "responsive", "modern", "scalable"];

  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-start px-4 overflow-hidden"
      >
        <div className="text-4xl md:text-7xl font-bold dark:text-white text-start">
          Building
          <FlipWords words={words} /> <br />
          <p className="mt-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Digital
            </span>{" "}
            Experiences
          </p>
        </div>
        <div className="font-extralight text-md md:text-lg dark:text-gray-300 py-4 max-w-2xl tracking-wide leading-7 mt-4">
          Hi, I am Aditya Soni, and I am a full-stack web developer. I am happy
          to work on a part-time and freelance basis, where I can apply my
          technical skills and contribute to innovative projects.
        </div>

        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className=" dark:bg-[rgba(24,24,27,1)] bg-white text-black dark:text-white flex items-center"
        >
          <span className="tracking-wider text-sm">View Projects →</span>
        </HoverBorderGradient>
      </motion.div>
    </AuroraBackground>
  );
}

export default HeroSection;
