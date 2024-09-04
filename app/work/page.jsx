"use client";

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import 'swiper/css';


const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Project 1",
    description: "This is the first project description.",
    stack: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript"],
    image: '/assets/img.png',
    live: "https://github.com/Mukesh12Roy/weather-app",
    github: "https://github.com/Mukesh12Roy/weather-app",
  },
  {
    num: "02",
    category: "frontend",
    title: "Project 2",
    description: "This is the second project description.",
    stack: ["HTML5", "CSS3", "JavaScript"],
    image: '/assets/img2.png',
    live: "https://github.com/Mukesh12Roy/weather-app",
    github: "https://github.com/Mukesh12Roy/weather-app",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);


  const handleSlideChange = (swiper) => {
    setProject(projects[swiper.activeIndex]);
  };

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-8">
          {/* Project Details */}
          <div className="w-full xl:w-1/2 xl:h-[460px] flex flex-col justify-between order-2 xl:order-none">
            <div>
              <div className="text-8xl leading-none font-extrabold text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item}{index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20 my-4"></div>
              <div className="flex items-center gap-4">
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <div className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                    <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                  </div>
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <div className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                    <BsGithub className="text-white text-3xl group-hover:text-accent" />
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Project Image Slider */}
          <div className="w-full xl:w-1/2">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] flex justify-center items-center bg-pink-50 relative">
                    <div className='relative w-full h-full'>
                      <img
                        src={project.image}
                        alt=""
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
