import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Machine Learning Intern',
    company: 'R&D Info Tech',
    location: 'Remote',
    period: 'Jan 2025 – Mar 2025',
    responsibilities: [
      'Improved predictive accuracy by 20% through custom ML algorithms.',
      'Processed and cleaned large datasets using Python.',
      'Presented data‑driven insights to senior management.'
    ]
  },
  {
    title: 'Full‑Stack Web Developer Intern',
    company: 'Bharat Intern',
    location: 'Remote',
    period: 'Nov 2023',
    responsibilities: [
      'Built full‑stack apps with React.js, Node.js, Flask, Django.',
      'Integrated MySQL & MongoDB backends.'
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title pb-4">Work Experience</h2>
        
        <div className="max-w-3xl mx-auto mt-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="timeline-dot"></div>
              <div className="card mb-6">
                <h3 className="text-xl md:text-2xl font-semibold text-royal mb-2">
                  {exp.title}
                </h3>
                <div className="flex flex-wrap items-center text-sm text-charcoal-light mb-4">
                  <span className="font-medium mr-3">{exp.company}</span>
                  <span className="flex items-center mr-3">
                    <MapPin size={14} className="mr-1" />
                    {exp.location}
                  </span>
                  <span className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {exp.period}
                  </span>
                </div>
                <ul className="list-disc list-inside space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-charcoal">{resp}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;