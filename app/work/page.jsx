"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description:
      "Designed and developed a user-friendly website clone for VIT Chennai’s Computer Science branch, incorporating advanced features and optimizations to improve functionality, user experience, and overall site performance.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/thumb1.png",
    live: "https://sarvesh-31.github.io/VIT-SCOPE/index.html",
    github: "https://github.com/SARVESH-31/VIT-SCOPE",
  },
  {
    num: "02",
    category: "fullstack",
    title: "project 2",
    description:
      "Developed Unity Forum, a community platform where users can create, join, and manage communities with advanced features like infinite scroll, post engagement (likes/dislikes), comment sections, search functionality, and integrated Google Authentication for a secure and seamless user experience.",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "MySQL" }, { name: "ORM: Prisma" }, 
      { name: "React Query" }, { name: "Caching: Redis" }, { name: "Validation: Zod" }, { name: "React Query" }],
 
    image: "/assets/work/thumb2.png",
    live: "https://unityforum.vercel.app/",
    github: "https://github.com/SARVESH-31/UnityForum",
  },
  {
    num: "03",
    category: "frontend",
    title: "project 3",
    description:
      "A web application that provides real-time weather updates for any city worldwide. Users can search for any city and instantly receive accurate weather information including temperature, humidity, wind speed, and more. The application fetches data using a weather API, ensuring up-to-date information with a user-friendly interface for seamless navigation.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/thumb3.png",
    live: "https://sarvesh-31.github.io/Weather-App/",
    github: "https://github.com/SARVESH-31/Weather-App",
  },
  {
    num: "04",
    category: "frontend",
    title: "project 4",
    description:
      "A dynamic platform that allows users to create, read, and update daily blog posts. The website features a clean interface for writing and editing content, making it easy to manage and share ideas. Users can also browse through existing blogs, keeping up with recent posts and updates in a seamless manner.",
    stack: [{ name: "React" }, { name: "Css 3" }, { name: "HTML 5" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "https://github.com/SARVESH-31/React-Blog-Website",
  },
  {
    num: "05",
    category: "frontend",
    title: "project 5",
    description:
      "A web application that automatically summarizes articles based on the link provided by the user. Simply enter the URL of any article, and the platform will generate a concise summary using advanced API calls. This tool helps users quickly grasp the key points of lengthy articles, saving time while delivering essential information.",
    stack: [{ name: "React" }, { name: "Css 3" }, { name: "HTML 5" }],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "https://github.com/SARVESH-31/AI-Article-Summarizer",
  },
  {
    num: "06",
    category: "frontend",
    title: "project 6",
    description:
      "An elegantly designed web application that offers a sleek, intuitive interface for performing basic arithmetic operations with ease.",
    stack: [{ name: "HTML 5" }, { name: "Css 3" }, { name: "JavaScript" }],
    image: "/assets/work/thumb3.png",
    live: "https://sarvesh-31.github.io/Calculator/",
    github: "https://github.com/SARVESH-31/Calculator",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex flex-wrap gap-2">
                {project.stack.map((item, index) => {
                return (
                  <li key={index} className="text-xl text-accent/60">
                  {item.name}
                   {/* remove the last comma */}
                   {index !== project.stack.length - 1 && ","}
                  </li>
                );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live} target = "_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github} target = "_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
