"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";
import emailjs from 'emailjs-com';

const info = [
  {
    icon: <FaPhoneAlt className="text-3xl" />,
    title: 'Phone',
    description: '(+91) 8072***528',
  },
  {
    icon: <FaEnvelope className="text-3xl" />,
    title: 'Email',
    description: 'mukeshkum****ij@gmail.com',
  },
  {
    icon: <FaMapMarkerAlt className="text-3xl" />,
    title: 'Address',
    description: 'No 2* ******* Aparment Chennai-28',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
      }, (error) => {
        console.error('Failed to send email.', error);
      });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-[30px]">
          {/* Form */}
          <div className="flex-1 order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-6 bg-[#27272c] rounded-xl" onSubmit={handleSubmit}>
              <h3 className="text-2xl xl:text-4xl text-accent">Let's Connect...</h3>
              <p className="text-white/60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia perferendis, delectus ducimus necessitatibus quam, doloribus consectetur voluptatibus.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input className="bg-[#e64833] text-white" type="text" name="firstname" placeholder="First Name" value={formData.firstname} onChange={handleChange} />
                <Input className="bg-[#e64833] text-white" type="text" name="lastname" placeholder="Last Name" value={formData.lastname} onChange={handleChange} />
                <Input className="bg-[#e64833] text-white" type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} />
                <Input className="bg-[#e64833] text-white" type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
                <div className="md:col-span-2">
                  <Textarea className="bg-[#e64833] text-white" name="message" placeholder="Enter Your Message..." value={formData.message} onChange={handleChange} />
                </div>
              </div>
              <Button type="submit">Let's Connect...</Button>
            </form>
          </div>
          {/* Info */}
          <div className="flex-1 flex flex-col justify-center xl:justify-mid order-1 xl:order-none">
            {info.map((item, index) => (
              <div key={index} className="flex items-center text-left p-4 xl:items-start">
                <div className="mr-4">{item.icon}</div>
                <div>
                  <h4 className="text-xl font-semibold">{item.title}</h4>
                  <p className="text-gray-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
