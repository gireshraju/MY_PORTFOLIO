import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const certifications = [
  'Prompt Engineering for ChatGPT',
  'ChatGPT Advanced Data Analysis',
  'Python Course (Udemy)',
  'OCI Certified Foundations Associate',
  'GCP Computing Foundations & Generative AI'
];

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="section bg-light-dark">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title pb-4">Certifications & Courses</h2>
        
        <div className="mt-12">
          <div className="flex overflow-x-auto py-8 space-x-6 no-scrollbar">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="card min-w-[280px] w-[280px] flex flex-col items-center text-center p-6"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Award size={48} className="text-gold mb-4" />
                <h3 className="text-lg font-semibold mb-2">{cert}</h3>
                <p className="text-charcoal-light text-sm">Completed in 2024</p>
                <div className="mt-4">
                  <span className="inline-block bg-royal text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Verified
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Certifications;