"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaFigma, FaRocket, FaSatellite, FaMeteor, FaGraduationCap } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";

const about = {
  title: "Mission Briefing",
  description: "Seasoned space explorer with expertise in interstellar navigation and a strong foundation in quantum mechanics.",
  info: [
    { fieldName: "Callsign", fieldValue: "Mukesh Rai" },
    { fieldName: "Comms Frequency", fieldValue: "(+91) 8072440528" },
    { fieldName: "Flight Hours", fieldValue: "10,000+" },
    { fieldName: "Home Base & Home Planet", fieldValue: "Chennai, India Earth" },
    { fieldName: "Subspace Mail", fieldValue: "mukeshkumarraij@gmail.com" },
    { fieldName: "Freelance Mission", fieldValue: "Not Available" },
    { fieldName: "Known Dialects", fieldValue: "Python, Javascript, React, Next.js" },
  ],
};

const experience = {
  title: 'Space Odyssey',
  description: 'A journey through the cosmos, from nebula navigation to black hole data analysis.',
  items: [
    { company: "Rocket Learning", position: "Frontend development intern", duration: "Stardate 2024.6 - Present" },
    { company: "Prodian Infotech Private Limited", position: "Data Analyst Intern", duration: "Stardate 2022.1 - 2023.5" },
  ],
};

const education = {
  title: 'Cosmic Academia',
  description: 'Continuous learning across the universe, from formal astro-engineering to virtual reality simulations.',
  items: [
    { institution: "DG Vaishnav College", program: " Bachelor of Computer Applications", duration: "Stardate 2021" },
    { institution: "Luna Tech Institute", program: "Bachelor of Quantum Computing", duration: "Stardate 2020 - 2023" },
  ],
};

const skills = {
  title: 'Stellar Toolkit',
  description: 'Proficient in a wide range of cosmic technologies for both frontend star-mapping and backend black-hole computations.',
  mySkillset: [
    { icon: <FaHtml5 />, name: 'HoloHTML 5' },
    { icon: <FaCss3 />, name: 'Cosmic CSS 3' },
    { icon: <FaJs />, name: 'JavaScriptDrive' },
    { icon: <FaReact />, name: 'ReactorCore' },
    { icon: <FaNodeJs />, name: 'Node.space' },
    { icon: <SiTailwindcss />, name: 'TailwindNebula' },
    { icon: <SiNextdotjs />, name: 'Next.Galaxy' },
    { icon: <FaFigma />, name: 'FigmaStar' },
  ],
};

const Resume = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 text-[#ffbf00]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-left mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#ffbf00] to-[#ff4500]">Cosmic Chronicles</h2>
        </motion.div>

        <Card className="bg-[#000033]/50 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-[#ffbf00]/20 hover:border-[#ffbf00]/50 transition-all">
          <CardContent className="p-0">
            <Tabs defaultValue="about" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-4 bg-[#000033]/70">
                {[
                  { value: "about", icon: <FaRocket /> },
                  { value: "experience", icon: <FaSatellite /> },
                  { value: "education", icon: <FaGraduationCap /> },
                  { value: "skills", icon: <FaMeteor /> },
                ].map((tab) => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className="bg-[#000033]/50 hover:bg-[#ffbf00]/20 text-[#ffbf00] transition-colors duration-300 flex items-center justify-center"
                  >
                    {tab.icon}
                    <span className="ml-2 hidden sm:inline">{tab.value.charAt(0).toUpperCase() + tab.value.slice(1)}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="p-6"
              >
                <TabsContent value="about">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#ffbf00] to-[#ff4500]">{about.title}</h3>
                    <p className="text-[#ffd966] mb-6">{about.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {about.info.map((item, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Badge variant="outline" className="text-[#ffbf00] border-[#ffbf00] bg-[#000033]/50">{item.fieldName}</Badge>
                          <span className="text-[#ffd966]">{item.fieldValue}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </TabsContent>
                
                <TabsContent value="experience">
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#ffbf00] to-[#ff4500]">{experience.title}</h3>
                    <p className="text-[#ffd966] mb-6">{experience.description}</p>
                    {experience.items.map((item, index) => (
                      <motion.div 
                        key={index} 
                        className="mb-4 last:mb-0 bg-[#000033]/50 p-4 rounded-lg border border-[#ffbf00]/20 hover:border-[#ffbf00]/50 transition-all"
                        whileHover={{ scale: 1.02 }}
                      >
                        <h4 className="font-semibold text-lg text-[#ffbf00]">{item.company}</h4>
                        <p className="text-sm text-[#ffd966]">{item.position}</p>
                        <p className="text-xs text-[#ffd966] mt-1">{item.duration}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </TabsContent>
                
                <TabsContent value="education">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#ffbf00] to-[#ff4500]">{education.title}</h3>
                    <p className="text-[#ffd966] mb-6">{education.description}</p>
                    {education.items.map((item, index) => (
                      <motion.div 
                        key={index} 
                        className="mb-4 last:mb-0 bg-[#000033]/50 p-4 rounded-lg border border-[#ffbf00]/20 hover:border-[#ffbf00]/50 transition-all"
                        whileHover={{ scale: 1.02 }}
                      >
                        <h4 className="font-semibold text-lg text-[#ffbf00]">{item.institution}</h4>
                        <p className="text-sm text-[#ffd966]">{item.program}</p>
                        <p className="text-xs text-[#ffd966] mt-1">{item.duration}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </TabsContent>
                
                <TabsContent value="skills">
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#ffbf00] to-[#ff4500]">{skills.title}</h3>
                    <p className="text-[#ffd966] mb-6">{skills.description}</p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {skills.mySkillset.map((skill, index) => (
                        <TooltipProvider key={index}>
                          <Tooltip>
                            <TooltipTrigger>
                              <motion.div
                                className="flex items-center justify-center p-4 bg-[#000033]/50 rounded-lg hover:bg-[#ffbf00]/20 transition duration-300 border border-[#ffbf00]/20 hover:border-[#ffbf00]/50"
                                whileHover={{ scale: 1.05, rotate: 5 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <span className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#ffbf00] to-[#ff4500]">{skill.icon}</span>
                              </motion.div>
                            </TooltipTrigger>
                            <TooltipContent className="bg-[#000033] border border-[#ffbf00] text-[#ffd966]">
                              {skill.name}
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      ))}
                    </div>
                  </motion.div>
                </TabsContent>
              </motion.div>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Resume;