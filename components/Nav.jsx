'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
    { name: 'home', path: "/" },
    { name: 'services', path: "/services" },
    { name: 'resume', path: "/resume" },
    { name: 'work', path: "/work" },
    { name: 'contact', path: "/contact" },
];

const Nav = () => {
    const pathname = usePathname();

    return (
        <nav className="flex gap-8">
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
    );
}

export default Nav;