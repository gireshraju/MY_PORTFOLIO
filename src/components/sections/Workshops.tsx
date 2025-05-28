import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Clock, Award } from 'lucide-react';

const workshops = [
  {
    title: 'Business Intelligence Workshop (Power BI)',
    duration: '2 days',
    icon: <Briefcase size={24} className="text-royal" />
  },
  {
    title: '24‑Hour College Hackathon Participant',
    duration: '24 hours',
    icon: <Award size={24} className="text-royal" />
  },
  {
    title: 'Google Cloud & Generative AI Workshop (GDSC)',
    duration: '1 month',
    icon: <Briefcase size={24} className="text-royal" />
  }
];

const Workshops: React.FC = () => {
  return (
    <section id="workshops\" className="section bg-light-dark">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title pb-4">Workshops & Hackathons</h2>
        
        <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {workshops.map((workshop, index) => (
            <motion.div
              key={index}
              className="card card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="flex flex-col items-center text-center p-4">
                {workshop.icon}
                <h3 className="text-lg font-semibold mt-4 mb-2">{workshop.title}</h3>
                <div className="flex items-center text-charcoal-light">
                  <Clock size={16} className="mr-2" />
                  <span>{workshop.duration}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Workshops;