"use client";

import { useState } from "react";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from "framer-motion";

const about = {
  title: "About Me",
  description: "Passionate developer with expertise in front-end technologies and a strong foundation in back-end development.",
  info: [
    { fieldName: "Name", fieldValue: "Mukesh Rai" },
    { fieldName: "Phone", fieldValue: "(+91) 8072****28" },
    { fieldName: "Experience", fieldValue: "1+ Years" },
    { fieldName: "Nationality", fieldValue: "Indian" },
    { fieldName: "Email", fieldValue: "mukeshkumarraij@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Not-Available" },
    { fieldName: "Languages", fieldValue: "Maithili, Hindi, English, Tamil" },
  ],
};

const experience = {
  icons: '/assets/resume/badge.svg',
  title: 'Experience',
  description: 'Diverse experience in various development roles, ranging from internships to professional engagements.',
  items: [
    { company: "Front-end Developer", position: "Internship", duration: "June 2024 - Present" },
    { company: "Prodian Infotech", position: "Data Analyst", duration: "Jan 2022 - May 2023" },
  ],
};

const education = {
  icons: '/assets/resume/cap.svg',
  title: 'Education',
  description: 'Continuous learning through formal education and online platforms to enhance my skillset.',
  items: [
    { institution: "Udemy", program: "Web Development Bootcamp", duration: "2023" },
    { institution: "DG Vaishnav College", program: "Bachelor of Computer Application (BCA)", duration: "2020 - 2023" },
  ],
};

const skills = {
  title: 'Skills',
  description: 'Proficient in a wide range of technologies and tools for both front-end and back-end development.',
  mySkillset: [
    { icon: <FaHtml5 className="text-4xl" />, name: 'HTML 5' },
    { icon: <FaCss3 className="text-4xl" />, name: 'CSS 3' },
    { icon: <FaJs className="text-4xl" />, name: 'JavaScript' },
    { icon: <FaReact className="text-4xl" />, name: 'React' },
    { icon: <FaNodeJs className="text-4xl" />, name: 'Node.js' },
    { icon: <SiTailwindcss className="text-4xl" />, name: 'Tailwind CSS' },
    { icon: <SiNextdotjs className="text-4xl" />, name: 'Next.js' },
    { icon: <FaFigma className="text-4xl" />, name: 'Figma' },
  ],
};

const Resume = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="container mx-auto p-4">
      <Tabs defaultValue="about" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="flex flex-col sm:flex-row justify-around mb-4">
          <TabsTrigger className="flex-1 bg-[#244855] text-center p-2 m-1 border rounded" value="about">About</TabsTrigger>
          <TabsTrigger className="flex-1 bg-[#244855] text-center p-2 m-1 border rounded" value="experience">Experience</TabsTrigger>
          <TabsTrigger className="flex-1 bg-[#244855] text-center p-2 m-1 border rounded" value="education">Education</TabsTrigger>
          <TabsTrigger className="flex-1 bg-[#244855] text-center p-2 m-1 border rounded" value="skills">Skills</TabsTrigger>
        </TabsList>
        
        <TabsContent value="about" className="p-4 border rounded">
          <h2 className="text-2xl font-bold mb-2">{about.title}</h2>
          <p className="mb-4">{about.description}</p>
          <ul>
            {about.info.map((item, index) => (
              <li key={index}><strong>{item.fieldName}:</strong> {item.fieldValue}</li>
            ))}
          </ul>
        </TabsContent>
        
        <TabsContent value="experience" className="p-4 border rounded">
          <h2 className="text-2xl font-bold mb-2">{experience.title}</h2>
          <p className="mb-4">{experience.description}</p>
          <ul>
            {experience.items.map((item, index) => (
              <li key={index}><strong>{item.company}:</strong> {item.position} ({item.duration})</li>
            ))}
          </ul>
        </TabsContent>
        
        <TabsContent value="education" className="p-4 border rounded">
          <h2 className="text-2xl font-bold mb-2">{education.title}</h2>
          <p className="mb-4">{education.description}</p>
          <ul>
            {education.items.map((item, index) => (
              <li key={index}><strong>{item.institution}:</strong> {item.program} ({item.duration})</li>
            ))}
          </ul>
        </TabsContent>
        
        <TabsContent value="skills" className="p-4 border rounded">
          <h2 className="text-2xl font-bold mb-2">{skills.title}</h2>
          <p className="mb-4">{skills.description}</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {skills.mySkillset.map((skill, index) => (
              <TooltipProvider key={index}>
                <Tooltip>
                  <TooltipTrigger>
                    <div className="flex items-center justify-center p-4 border rounded hover:text-accent transition duration-300">
                      <span className="text-4xl hover:text-accent transition duration-300">
                        {skill.icon}
                      </span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>{skill.name}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Resume;
