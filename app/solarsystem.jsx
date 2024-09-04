"use client";


import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const planets = [
  { name: 'Mercury', color: '#b9b9b9', size: 20, orbit: 100, category: 'Quick Projects' },
  { name: 'Venus', color: '#ffd966', size: 30, orbit: 150, category: 'Design Work' },
  { name: 'Earth', color: '#4e79a7', size: 35, orbit: 200, category: 'Web Development' },
  { name: 'Mars', color: '#e15759', size: 25, orbit: 250, category: 'Mobile Apps' },
  { name: 'Jupiter', color: '#f28e2b', size: 60, orbit: 350, category: 'Large Applications' },
  { name: 'Saturn', color: '#edc948', size: 55, orbit: 450, category: 'System Architecture' },
  { name: 'Uranus', color: '#76b7b2', size: 40, orbit: 550, category: 'Data Science' },
  { name: 'Neptune', color: '#59a14f', size: 38, orbit: 650, category: 'AI/ML' }
];

const SocialIcon = ({ Icon, href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300 transition-colors">
    <Icon className="w-6 h-6" />
  </a>
);

const Planet = ({ planet, onClick }) => (
  <div
    className="absolute rounded-full cursor-pointer hover:scale-110 transition-transform"
    style={{
      width: planet.size,
      height: planet.size,
      backgroundColor: planet.color,
      left: `calc(50% + ${planet.orbit}px)`,
      top: '50%',
      transform: 'translate(-50%, -50%)'
    }}
    onClick={() => onClick(planet)}
  />
);

const Orbit = ({ radius }) => (
  <div
    className="absolute rounded-full border border-gray-700"
    style={{
      width: radius * 2,
      height: radius * 2,
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }}
  />
);

const PlanetInfo = ({ planet, onClose }) => (
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 p-6 rounded-lg shadow-lg z-10 max-w-md w-full">
    <h2 className="text-2xl font-bold mb-4" style={{ color: planet.color }}>{planet.name}</h2>
    <h3 className="text-xl text-yellow-300 mb-2">{planet.category}</h3>
    <p className="text-gray-300 mb-4">Here you can find my projects and skills related to {planet.category}.</p>
    <button onClick={onClose} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
      Close
    </button>
  </div>
);

const SimpleSolarSystem = () => {
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative w-[800px] h-[800px]">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-yellow-500 rounded-full" />
          {planets.map((planet) => (
            <React.Fragment key={planet.name}>
              <Orbit radius={planet.orbit} />
              <Planet planet={planet} onClick={setSelectedPlanet} />
            </React.Fragment>
          ))}
        </div>
      </div>
      
      <div className="absolute top-4 left-4 text-white">
        <h1 className="text-4xl font-bold mb-2">Cosmic Portfolio</h1>
        <p className="text-xl">Click on planets to explore my skills and projects</p>
      </div>

      <div className="absolute bottom-4 right-4 flex space-x-4">
        <SocialIcon Icon={FaGithub} href="#" />
        <SocialIcon Icon={FaLinkedin} href="#" />
        <SocialIcon Icon={FaTwitter} href="#" />
      </div>

      {selectedPlanet && (
        <PlanetInfo planet={selectedPlanet} onClose={() => setSelectedPlanet(null)} />
      )}
    </div>
  );
};

export default SimpleSolarSystem;
