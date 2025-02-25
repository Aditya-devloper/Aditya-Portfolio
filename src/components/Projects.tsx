"use client";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/moving-border";
import { HoverEffect } from "./ui/card-hover-effect";

function Projects() {
  const projects = [
    {
      title: "E Bazaar",
      description:
        "An e-commerce platform with a sleek UI and seamless shopping experience, built for modern online stores.",
      link: "https://strong-e-com.netlify.app/",
    },
    {
      title: "FitMaker",
      description:
        "A fitness-focused website designed to help users find the best workout plans, trainers, and gym facilities.",
      link: "https://gym-website-aditya.netlify.app/",
    },
    {
      title: "MovieBox",
      description:
        "A movie streaming platform where users can explore and discover popular films with an engaging and dynamic UI.",
      link: "https://movie-app-85cd4e.netlify.app/",
    },
  ];

  return (
    <div className="py-12 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mt-5">
          <h2 className="text-2xl md:text-4xl text-teal-500 font-bold tracking-wide uppercase">
            My Projects
          </h2>
          <p className="mt-2 text-md md:text-lg leading-8 font-bold text-white tracking-wide ">
            Some of My Recent Work
          </p>
        </div>
        <div className="md:mt-10">
          <div className="max-w-6xl mx-auto">
            <HoverEffect items={projects} />
            <div className="text-center">
              <Link href="/">
                <Button
                  borderRadius="1.75rem"
                  className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                >
                  View More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
