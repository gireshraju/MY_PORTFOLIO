import React from 'react';
import { motion } from 'framer-motion';
import { Activity, MapPin, Gamepad, Globe } from 'lucide-react';

const hobbies = [
  {
    name: 'Watching Cricket',
    icon: <Activity size={32} className="text-royal" />
  },
  {
    name: 'Sightseeing',
    icon: <MapPin size={32} className="text-royal" />
  },
  {
    name: 'Playing Games',
    icon: <Gamepad size={32} className="text-royal" />
  },
  {
    name: 'Browsing the Internet',
    icon: <Globe size={32} className="text-royal" />
  }
];

const Hobbies: React.FC = () => (
  <section id="hobbies" className="section bg-white">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="section-title pb-4">Hobbies & Interests</h2>
      
      <div className="max-w-4xl mx-auto mt-12 flex flex-wrap justify-center gap-8">
        {hobbies.map((hobby, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            <div className="w-20 h-20 rounded-full bg-light flex items-center justify-center mb-4 transition-all duration-300 hover:bg-gold hover:shadow-md">
              {hobby.icon}
            </div>
            <span className="text-center font-medium">{hobby.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Hobbies;