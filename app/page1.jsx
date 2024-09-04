"use client";

import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
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

const StarField = () => (
  <div className="fixed inset-0 pointer-events-none">
    {[...Array(100)].map((_, i) => (
      <div
        key={i}
        className="absolute bg-white rounded-full"
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

const Home = () => {
  return (
    <div className="bg-[#000011] min-h-screen text-[#ffbf00] overflow-hidden">
      <StarField />
      <Section id="hero">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-4">
              Exploring the <span className="text-[#ffbf00]">Cosmos</span> Through Code
            </h1>
            <p className="text-xl text-[#ffd966] mb-8">
              Space and rocket enthusiast crafting stellar web experiences.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-[#ffbf00] text-[#000011] hover:bg-[#ffd966] transition-colors">
                Launch Mission <FaRocket className="ml-2" />
              </Button>
              <div className="flex gap-4 mt-4 sm:mt-0">
                <SocialIcon Icon={FaGithub} href="#" />
                <SocialIcon Icon={FaLinkedin} href="#" />
                <SocialIcon Icon={FaTwitter} href="#" />
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
              className="bg-[#000022]/50 backdrop-blur-lg p-6 rounded-lg shadow-md border border-[#ffbf00]/20"
            >
              <stat.icon className="text-4xl text-[#ffbf00] mb-2 mx-auto" />
              <h3 className="text-3xl font-bold text-[#ffbf00] mb-2">{stat.value}</h3>
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