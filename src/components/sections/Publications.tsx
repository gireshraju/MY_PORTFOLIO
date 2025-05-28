import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Calendar, ExternalLink } from 'lucide-react';

const publications = [
  {
    title: 'Suggestion Box Application',
    journal: 'IJISRT',
    volume: 'Vol 8 • Issue 12 • Dec 2023',
    id: 'IJISRT23DEC841',
    link: '#'
  },
  {
    title: 'Travel Finder System',
    journal: 'IJISRT',
    volume: 'Vol 10 • Issue 4 • Apr 2025',
    id: 'IJISRT25APR515',
    link: '#'
  }
];

const Publications: React.FC = () => {
  return (
    <section id="publications" className="section bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title pb-4">Publications & Journals</h2>
        
        <div className="max-w-4xl mx-auto mt-12 space-y-6">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              className="card card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="flex items-start">
                <FileText size={24} className="text-royal mr-4 mt-1" />
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold">{pub.title}</h3>
                    <div className="flex items-center mt-2 sm:mt-0">
                      <Calendar size={16} className="text-charcoal-light mr-2" />
                      <span className="text-sm text-charcoal-light">{pub.volume.split('•')[2].trim()}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center text-charcoal-light mt-1">
                    <span className="text-gold font-medium">{pub.journal}</span>
                    <span className="hidden sm:inline mx-2">•</span>
                    <span>{pub.volume.split('•')[0].trim() + ' • ' + pub.volume.split('•')[1].trim()}</span>
                    <span className="hidden sm:inline mx-2">•</span>
                    <span>ID: {pub.id}</span>
                  </div>
                  
                  <a 
                    href={pub.link} 
                    className="inline-flex items-center text-royal hover:text-royal-dark mt-3 transition-colors"
                  >
                    View Publication <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Publications;