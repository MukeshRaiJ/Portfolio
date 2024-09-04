"use client";

import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";
import { motion } from "framer-motion";

const links = [
    { name: 'home', path: "/" },
    { name: 'services', path: "/services" },
    { name: 'resume', path: "/resume" },
    { name: 'work', path: "/work" },
    { name: 'contact', path: "/contact" },
];

const MobileNav = () => {
    const pathname = usePathname();

    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <CiMenuBurger className="text-[32px] text-[#ffbf00]" />
                </motion.div>
            </SheetTrigger>
            <SheetContent className="flex flex-col bg-gray-900/95 border-l border-[#ffbf00]/20">
                <div className="mt-32 mb-40 text-center">
                    <Link href="/">
                        <motion.h1 
                            className="text-4xl font-semibold"
                            whileHover={{ scale: 1.05 }}
                        >
                            Mukesh<span className="text-[#ffbf00]">.</span>
                        </motion.h1>
                    </Link>
                </div>
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link 
                                href={link.path}
                                className={`${
                                    link.path === pathname 
                                        ? "text-[#ffbf00] border-b-2 border-[#ffbf00]" 
                                        : "text-[#ffd966]"
                                } capitalize font-medium hover:text-[#ffbf00] transition-colors duration-300`}
                            >
                                {link.name}
                            </Link>
                        </motion.div>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;