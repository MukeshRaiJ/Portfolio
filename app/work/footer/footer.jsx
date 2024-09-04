"use client";
import { FaRegCopyright } from "react-icons/fa";
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#e64833] text-white text-center p-4">
      <p className="m-0 flex items-center justify-center font-bold">
        <span className="mr-1">Copyright</span>
        <FaRegCopyright className="mx-1" />
        <span>Mukesh Kumar Rai</span>
      </p>
    </footer>
  );
};

export default Footer;
