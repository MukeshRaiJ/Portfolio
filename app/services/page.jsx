"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowDownRightCircle } from "react-icons/bs";

const services = [
  {
    num: 1,
    title: "Web Development",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
  },
  {
    num: 2,
    title: "Web Design",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..",
  },
  {
    num: 3,
    title: "SEO Optimization",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..",
  },
  {
    num: 4,
    title: "Graphics Design",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
        >
          {services.map((service, index) => (
            <div key={index} className="flex-1 flex-col justify-center gap-6 group">
              <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500 mb-2">{service.num}</div>
              <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
              <p className="text-lg text-white-700 mb-4">{service.description}</p>
              <div className="border-b border-gray-300 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
