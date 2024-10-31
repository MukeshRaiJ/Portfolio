"use client";

/* eslint-disable react/no-unescaped-entities */

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PhoneCall, Mail, MapPin, Send, Rocket, Star } from "lucide-react";

const ContactInfo = ({ icon: Icon, title, description }) => (
  <motion.div
    className="flex items-center space-x-4 mb-6"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex-shrink-0">
      <div className="p-3 bg-gradient-to-br from-[#ffbf00] to-[#ff4500] rounded-full">
        <Icon className="h-6 w-6 text-[#000033]" />
      </div>
    </div>
    <div>
      <h4 className="font-semibold text-[#ffbf00]">{title}</h4>
      <p className="text-sm text-[#ffd966]">{description}</p>
    </div>
  </motion.div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 text-[#ffbf00] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#ffbf00] to-[#ff4500]">
            Launch a Message
          </h2>
          <p className="text-xl text-[#ffd966] max-w-2xl mx-auto">
            Ready to embark on a cosmic journey? We're here to guide you through
            the stars. Let's connect!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="bg-[#000033]/50 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-[#ffbf00]/20 hover:border-[#ffbf00]/50 transition-all relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-8">Mission Control</h3>
            <ContactInfo
              icon={Rocket}
              title="Space Station"
              description="Orbital Platform Alpha"
            />
            <ContactInfo
              icon={Star}
              title="Coordinates"
              description="LAT: 28.5728° N, LON: 80.6490° W"
            />
            <ContactInfo
              icon={Mail}
              title="Subspace Comm"
              description="captain@cosmic-voyages.space"
            />
          </motion.div>

          <motion.div
            className="bg-[#000033]/50 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-[#ffbf00]/20 hover:border-[#ffbf00]/50 transition-all"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Space Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-[#000033]/70 border-[#ffbf00]/30 focus:border-[#ffbf00] text-[#ffd966] placeholder-[#ffd966]/50"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Galactic Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-[#000033]/70 border-[#ffbf00]/30 focus:border-[#ffbf00] text-[#ffd966] placeholder-[#ffd966]/50"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Cosmic Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="bg-[#000033]/70 border-[#ffbf00]/30 focus:border-[#ffbf00] text-[#ffd966] placeholder-[#ffd966]/50"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#ffbf00] to-[#ff4500] hover:from-[#ffd966] hover:to-[#ff6347] text-[#000033] font-semibold transition-all duration-300"
              >
                Launch Message
                <Rocket className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
