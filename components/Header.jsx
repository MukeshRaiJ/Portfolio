"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full top-0 left-0 right-0 z-50 bg-[#00002c] backdrop-blur-sm"
    >
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        <Link href="/">
          <motion.h1 
            className="text-3xl font-bold"
            whileHover={{ scale: 1.05 }}
          >
            Mukesh<span className="text-[#ffbf00]">.</span>
          </motion.h1>
        </Link>
        <div className="hidden md:block">
          <Nav />
        </div>
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
