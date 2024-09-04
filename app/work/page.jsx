"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import 'swiper/css';

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Project 1",
    description: "This is the first project description. It showcases my skills in creating responsive and interactive web applications.",
    stack: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript"],
    image: '/assets/img.png',
    live: "https://github.com/Mukesh12Roy/weather-app",
    github: "https://github.com/Mukesh12Roy/weather-app",
  },
  // Add more projects here
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    setProject(projects[swiper.activeIndex]);
  };

  return (
    <section className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800 text-[#ffbf00]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-4">My Work</h2>
          <p className="text-xl text-[#ffd966] max-w-2xl mx-auto">
            Explore some of my recent projects and see my skills in action.
          </p>
        </motion.div>

        <div className="flex flex-col xl:flex-row xl:gap-12">
          {/* Project Details */}
          <motion.div 
            className="w-full xl:w-1/2 flex flex-col justify-between mb-8 xl:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-[#ffbf00]/20">
              <div className="text-8xl font-extrabold text-[#ffbf00]/20 mb-4">
                {project.num}
              </div>
              <h3 className="text-4xl font-bold mb-4 capitalize">
                {project.category} project
              </h3>
              <p className="text-[#ffd966] mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-4 mb-6">
                {project.stack.map((item, index) => (
                  <span key={index} className="text-sm bg-[#ffbf00]/10 text-[#ffd966] px-3 py-1 rounded-full">
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <motion.div 
                    className="w-[60px] h-[60px] rounded-full bg-[#ffbf00]/10 flex justify-center items-center group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <BsArrowUpRight className="text-[#ffbf00] text-2xl group-hover:text-[#ffd966]"/>
                  </motion.div>
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <motion.div 
                    className="w-[60px] h-[60px] rounded-full bg-[#ffbf00]/10 flex justify-center items-center group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <BsGithub className="text-[#ffbf00] text-2xl group-hover:text-[#ffd966]" />
                  </motion.div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Project Image Slider */}
          <motion.div 
            className="w-full xl:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="h-[460px] rounded-3xl overflow-hidden"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-full">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                    <div className="absolute bottom-6 left-6 text-[#ffbf00]">
                      <h4 className="text-2xl font-bold mb-2">{project.title}</h4>
                      <p className="text-[#ffd966]">{project.category}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;