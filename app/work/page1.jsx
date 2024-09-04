"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaRocket, FaGithub, FaSatellite, FaSpaceShuttle, FaMeteor } from 'react-icons/fa';
import 'swiper/css';

const projects = [
  {
    num: "01",
    category: "Orbital Station",
    title: "Space Weather App",
    description: "An interactive dashboard for monitoring space weather conditions and predicting solar flares.",
    stack: ["React", "D3.js", "NASA API", "Tailwind CSS"],
    image: '/assets/space-weather.png',
    live: "https://space-weather-app.com",
    github: "https://github.com/YourUsername/space-weather-app",
  },
  {
    num: "02",
    category: "Lunar Base",
    title: "Cosmic Resource Tracker",
    description: "A real-time system for managing and optimizing resources on a simulated lunar base.",
    stack: ["Vue.js", "Node.js", "MongoDB", "WebGL"],
    image: '/assets/lunar-base.png',
    live: "https://cosmic-resource-tracker.com",
    github: "https://github.com/YourUsername/cosmic-resource-tracker",
  },
  // Add more space-themed projects here
];

const ProjectIcon = ({ category }) => {
  switch (category) {
    case "Orbital Station":
      return <FaSatellite />;
    case "Lunar Base":
      return <FaMeteor />;
    default:
      return <FaSpaceShuttle />;
  }
};

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    setProject(projects[swiper.activeIndex]);
  };

  return (
    <section className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 text-[#ffbf00]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#ffbf00] to-[#ff4500]">
            Cosmic Creations
          </h2>
          <p className="text-xl text-[#ffd966] max-w-2xl mx-auto">
            Embark on a journey through my intergalactic portfolio of projects.
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
            <div className="bg-[#000033]/50 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-[#ffbf00]/20 hover:border-[#ffbf00]/50 transition-all">
              <div className="text-8xl font-extrabold text-[#ffbf00]/20 mb-4">
                {project.num}
              </div>
              <h3 className="text-4xl font-bold mb-4 capitalize flex items-center">
                <ProjectIcon category={project.category} className="mr-2 text-[#ff4500]" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffbf00] to-[#ff4500]">
                  {project.category}
                </span>
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
                    className="w-[60px] h-[60px] rounded-full bg-gradient-to-r from-[#ffbf00] to-[#ff4500] flex justify-center items-center group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaRocket className="text-[#000033] text-2xl group-hover:text-[#000011]"/>
                  </motion.div>
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <motion.div 
                    className="w-[60px] h-[60px] rounded-full bg-gradient-to-r from-[#ffbf00] to-[#ff4500] flex justify-center items-center group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaGithub className="text-[#000033] text-2xl group-hover:text-[#000011]" />
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
                  <motion.div 
                    className="relative w-full h-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#000033] to-transparent opacity-70"></div>
                    <div className="absolute bottom-6 left-6 text-[#ffbf00]">
                      <h4 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#ffbf00] to-[#ff4500]">
                        {project.title}
                      </h4>
                      <p className="text-[#ffd966]">{project.category}</p>
                    </div>
                  </motion.div>
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