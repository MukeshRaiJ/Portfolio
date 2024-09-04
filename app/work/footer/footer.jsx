"use client";

import React from 'react';
import { FaRegCopyright, FaLinkedin, FaGithub, FaRocket } from "react-icons/fa";
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="text-[#ffbf00] py-8 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between"
        >
          <motion.div
            className="flex items-center mb-4 md:mb-0"
            whileHover={{ scale: 1.05 }}
          >
            <FaRegCopyright className="mr-1" />
            <span>{new Date().getFullYear()}</span>
            <span className="ml-2 font-semibold">Mukesh Rai</span>
          </motion.div>
         
          <div className="flex-grow mx-4 h-[1px] bg-gradient-to-r from-transparent via-[#ffbf00] to-transparent my-4 md:my-0"></div>
         
          <motion.div
            className="flex items-center space-x-4"
            whileHover={{ scale: 1.05 }}
          >
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff4500] transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff4500] transition-colors">
              <FaGithub size={24} />
            </a>
            <FaRocket size={24} className="text-[#ff4500]" />
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;