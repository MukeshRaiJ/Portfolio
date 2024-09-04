"use client";
import React from 'react';
import { FaRegCopyright, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-[#00002c] text-[#ffbf00] py-6">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center">
            <FaRegCopyright className="mr-1" />
            <span>{new Date().getFullYear()}</span>
            <span className="ml-2 font-semibold">Mukesh Rai</span>
          </div>
          <div className="flex-grow mx-4 h-[1px] bg-[#ffbf00]"></div>
          <div className="flex items-center">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="mr-3">
              <FaLinkedin size={20} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;