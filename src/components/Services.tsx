"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { Button } from "./ui/moving-border";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";
import serviceData from "@/data/services.json";

interface Service {
  id: number;
  title: string;
  image: string;
  desc: string;
  skills: any[];
}

function Services() {
  return (
    <div className="py-12 bg-gray-900">
      <div className="mt-5">
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl text-teal-500 font-bold tracking-wide uppercase">
            My Services
          </h2>
          <p className="mt-2 text-md md:text-lg leading-8 font-bold text-white tracking-wide ">
            Let's Build Something Amazing Together
          </p>
        </div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {serviceData.service.map((item: Service) => (
            <div className="flex justify-center px-4" key={item.id}>
              <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:px-10 sm:py-7 bg-white dark:bg-zinc-900 h-full">
                <div className="flex items-center space-x-4">
                  <div>
                    <h2 className="text-xl sm:text-3xl font-semibold text-black dark:text-gray-100 mb-5">
                      {item.title}
                    </h2>
                    <p className="text-sm md:text-md text-neutral-600 dark:text-gray-200 md:text-md tracking-wide leading-6">
                      {item.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {item.skills.map((skill, index) => (
                        <button
                          key={index}
                          className="inline-flex h-8 animate-shimmer items-center justify-center rounded-md border border-slate-800 
      bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] 
      px-6 font-medium text-slate-400 transition-colors 
      focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                        >
                          <p className="text-sm text-gray-300">{skill}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
