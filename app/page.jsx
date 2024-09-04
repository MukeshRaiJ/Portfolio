"use client";

import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaRocket, FaGithub, FaLinkedin, FaTwitter, FaSatellite, FaSpaceShuttle, FaMeteor } from "react-icons/fa";

import Services from "./services/page";
import Resume from "./resume/page";
import Work from "./work/page1";
import Contact from "./contact/page";
import Footer from "./work/footer/footer";

const SocialIcon = ({ Icon, href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-[#ffd966] hover:text-[#ffbf00] transition-colors">
    <Icon className="w-6 h-6" />
  </a>
);

const Section = ({ id, children }) => (
  <section id={id} className="py-20">
    <div className="container mx-auto px-4">
      {children}
    </div>
  </section>
);

const StarField = () => {
  const starRef = useRef(null);

  useEffect(() => {
    const stars = starRef.current;
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const moveX = clientX - window.innerWidth / 2;
      const moveY = clientY - window.innerHeight / 2;
      stars.style.transform = `translate(${moveX * 0.01}px, ${moveY * 0.01}px)`;
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={starRef} className="fixed inset-0 pointer-events-none">
      {[...Array(200)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full animate-twinkle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            animationDuration: `${Math.random() * 10 + 5}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
};

const FloatingAstronaut = () => (
  <motion.div
    className="fixed bottom-10 left-10 w-64 h-80 pointer-events-none"
    animate={{
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <img src="/astronut.jpg" alt="Floating Astronaut" className="w-full h-full object-contain" />
  </motion.div>
);

const ParallaxPlanet = ({ src, alt, initialY, right, size }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [initialY, initialY - 100]);

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ y, right: right }}
      animate={{
        y: [initialY, initialY - 20, initialY],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <motion.img
        src={src}
        alt={alt}
        style={{ width: size, height: size }}
      />
    </motion.div>
  );
};

const Home = () => {
  const handleDownloadResume = () => {
    // Replace 'your-resume.pdf' with the actual name of your PDF file
    const pdfUrl = '/Mukesh_Resume_2024.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Mukesh_Rai_Resume.pdf'; // Replace with your desired download filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-gradient-to-b from-[#000011] to-[#000033] min-h-screen text-[#ffbf00] overflow-hidden">
      <StarField />
      <FloatingAstronaut />
      <ParallaxPlanet src="/moon.png" alt="Distant Planet" initialY={100} right="50px" size="64px" />
      <ParallaxPlanet src="/earth.png" alt="Nearby Moon" initialY={500} right="150px" size="48px" />

      <Section id="hero">
        <div className="flex flex-col items-center justify-center text-center mt-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#ffbf00] to-[#ff4500]">
            I'm Mukesh Rai
            </h1>
            <p className="text-xl text-[#ffd966] mb-8">
            A front-end developer with a passion for space exploration, blending cosmic curiosity with cutting-edge web design. I create stellar user experiences through innovative code, turning digital dreams into reality.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-r from-[#ffbf00] to-[#ff4500] text-[#000011] hover:from-[#ffd966] hover:to-[#ff6347] transition-colors"
                onClick={handleDownloadResume}
              >
                Launch Mission <FaRocket className="ml-2" />
              </Button>
              <div className="flex gap-4 mt-4 sm:mt-0">
                <SocialIcon Icon={FaGithub} href="https://github.com/MukeshRaiJ" />
                <SocialIcon Icon={FaLinkedin} href="https://www.linkedin.com/in/mukesh-kumar-rai-a64a01238/" />
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section id="stats">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Light Years Traveled", value: "42", icon: FaSpaceShuttle },
            { label: "Planets Explored", value: "9+", icon: FaSatellite },
            { label: "Space Missions", value: "15+", icon: FaRocket },
            { label: "Meteors Dodged", value: "∞", icon: FaMeteor }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#000033]/50 backdrop-blur-lg p-6 rounded-lg shadow-lg border border-[#ffbf00]/20 hover:border-[#ffbf00]/50 transition-all"
            >
              <stat.icon className="text-4xl text-[#ffbf00] mb-2 mx-auto" />
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ffbf00] to-[#ff4500] mb-2">{stat.value}</h3>
              <p className="text-[#ffd966]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Section>
      <hr className="w-full border-t-1 border-[#ffbf00]/20 my-4" />
      <Services />
      <hr className="w-full border-t-1 border-[#ffbf00]/20 my-4" />
      <Resume />
      <hr className="w-full border-t-1 border-[#ffbf00]/20 my-4" />
      <Work />
      <hr className="w-full border-t-1 border-[#ffbf00]/20 my-4" />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;