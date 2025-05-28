import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const education = [
  {
    degree: 'B.Tech, Computer Science',
    institution: 'Sri Vasavi Engineering College',
    period: 'Apr 2025',
    score: 'GPA 8.63'
  },
  {
    degree: 'Intermediate, MPC',
    institution: 'Pragati Junior College',
    period: 'Mar 2021',
    score: 'Marks 931/1,000'
  },
  {
    degree: 'High School',
    institution: 'Roots School',
    period: 'Apr 2019',
    score: 'GPA 9.7'
  }
];

const Education: React.FC = () => {
  return (
    <section id="education" className="section bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title pb-4">Education</h2>
        
        <div className="max-w-3xl mx-auto mt-12 space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="card card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="flex items-start md:items-center flex-col md:flex-row">
                <div className="flex items-center mb-3 md:mb-0">
                  <GraduationCap size={24} className="text-royal mr-3" />
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                </div>
                <div className="md:ml-auto flex items-center text-charcoal-light">
                  <Calendar size={16} className="mr-2" />
                  <span>{edu.period}</span>
                </div>
              </div>
              
              <div className="mt-3 flex flex-col md:flex-row md:items-center">
                <span className="text-charcoal ml-9 md:ml-10">{edu.institution}</span>
                <span className="mt-1 md:mt-0 md:ml-auto font-medium text-royal">
                  {edu.score}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;