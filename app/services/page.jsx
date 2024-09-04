"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaSatellite, FaMeteor, FaGlobe } from "react-icons/fa";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    num: 1,
    title: "Interstellar Web Development",
    description:
      "Crafting websites that span galaxies, connecting users across the cosmos with lightning-fast, responsive designs.",
    icon: <FaRocket />,
  },
  {
    num: 2,
    title: "Nebula UI/UX Design",
    description:
      "Creating user interfaces as captivating as cosmic nebulae, ensuring an out-of-this-world user experience.",
    icon: <FaSatellite />,
  },
  {
    num: 3,
    title: "Quantum SEO Optimization",
    description:
      "Boosting your visibility across the digital universe with cutting-edge SEO strategies that defy space-time.",
    icon: <FaMeteor />,
  },
  {
    num: 4,
    title: "Galactic Brand Identity",
    description:
      "Forging unforgettable brand identities that shine brighter than the stars in the vast expanse of the market.",
    icon: <FaGlobe />,
  },
];

const Services = () => {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 text-[#ffbf00]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-left mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#ffbf00] to-[#ff4500]">Cosmic Services</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <Card className="bg-white/5 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden h-full border border-[#ffbf00]/20 hover:border-[#ffbf00]/50 transition-all group">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ffbf00] to-[#ff4500]">
                      {service.title}
                    </CardTitle>
                    <span className="text-5xl font-extrabold text-[#ffbf00]/20 group-hover:text-[#ffbf00]/40 transition-colors">
                      {service.num.toString().padStart(2, '0')}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-lg text-[#ffd966] mb-6">
                    {service.description}
                  </CardDescription>
                  <motion.div
                    className="flex items-center text-[#ffbf00] group-hover:text-[#ff4500] transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="mr-2 text-3xl">{service.icon}</span>
                    <span>Explore Mission</span>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;