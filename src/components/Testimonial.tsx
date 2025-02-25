"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

function Testimonials() {
  const testimonials = [
    {
      name: "Amit Sharma",
      title: "Software Engineer at TechSoft Solutions",
      quote:
        "Aditya's work is truly impressive! His attention to detail and problem-solving skills made our project smooth and efficient.",
    },
    {
      name: "Neha Verma",
      title: "Product Designer at CodeNest",
      quote:
        "Working with Aditya was a great experience. He understands requirements quickly and delivers clean, scalable code.",
    },
    {
      name: "Rahul Mehta",
      title: "Full-Stack Developer at Foxaisr",
      quote:
        "Aditya's expertise in frontend and backend development is remarkable. His projects reflect his passion and dedication.",
    },
    {
      name: "Sakshi Patel",
      title: "Freelance UX Designer",
      quote:
        "I collaborated with Aditya on a project, and his ability to convert ideas into functional designs was amazing!",
    },
  ];
  return (
    <>
      <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.07] items-center justify-center relative overflow-hidden">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 z-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Testimonial
        </h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-6xl">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
