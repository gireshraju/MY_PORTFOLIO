import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="section bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title pb-4 text-center">About Me</h2>

        <div className="flex justify-center items-center mt-12">
          <motion.div
            className="max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="card">
              <p className="text-lg leading-relaxed">
                A highly motivated and detail‑oriented Computer Science graduate with a strong foundation in programming, web development, and database management. Skilled in designing and developing responsive web applications using modern technologies. Passionate about continuous learning and eager to contribute to innovative projects that solve real‑world challenges and enhance user experiences.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
