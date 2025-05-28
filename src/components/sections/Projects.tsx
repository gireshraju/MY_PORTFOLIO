import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'AI‑Powered Travel Finder',
    description: 'A sophisticated travel application featuring user authentication and personalized trip recommendations, complete with day-by-day itineraries generated via AI destination research.',
    tags: ['React', 'Node.js', 'AI', 'MongoDB'],
    image: 'https://images.pexels.com/photos/2007401/pexels-photo-2007401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    title: 'AGR Shop (eCommerce)',
    description: 'A full-stack Django eCommerce platform with distinct seller and customer roles, featuring shopping cart functionality and order management.',
    tags: ['Django', 'Python', 'MySQL', 'Bootstrap'],
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    title: 'Suggestion Box App',
    description: 'A responsive suggestion management application built with React, Node.js, Express, and MySQL, focusing on a clean and intuitive user interface.',
    tags: ['React', 'Node.js', 'Express', 'MySQL'],
    image: 'https://images.pexels.com/photos/4466181/pexels-photo-4466181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    title: 'AI‑Based Emotion Detection',
    description: 'A machine learning system trained to recognize various emotions including happiness, sadness, anger, and surprise through facial expression analysis.',
    tags: ['Python', 'TensorFlow', 'OpenCV', 'Machine Learning'],
    image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

const Projects: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="section bg-light-dark">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title pb-4">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-lg h-80"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                style={{ 
                  transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1.0)'
                }}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-midnight to-transparent opacity-70"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs bg-gold px-2 py-1 rounded text-charcoal-dark font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {hoveredIndex === index && (
                <motion.div 
                  className="absolute inset-0 bg-midnight bg-opacity-90 flex flex-col justify-center items-center p-6 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold text-gold mb-4">{project.title}</h3>
                  <p className="text-white mb-6">{project.description}</p>
                  <div className="flex gap-4">
                    <button className="btn btn-secondary flex items-center gap-2 text-sm py-2">
                      <ExternalLink size={16} />
                      View Project
                    </button>
                    <button className="btn btn-primary flex items-center gap-2 text-sm py-2">
                      <Github size={16} />
                      Source Code
                    </button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;