import React from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Database, Server, Cloud, Heart } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: <Code className="text-royal" size={24} />,
    skills: ['Python']
  },
  {
    title: 'Frontend',
    icon: <Globe className="text-royal\" size={24} />,
    skills: ['HTML5', 'CSS', 'JavaScript', 'React.js']
  },
  {
    title: 'Backend',
    icon: <Server className="text-royal" size={24} />,
    skills: ['Django', 'Flask', 'Node.js']
  },
  {
    title: 'Databases',
    icon: <Database className="text-royal\" size={24} />,
    skills: ['MySQL', 'MongoDB']
  },
  {
    title: 'Cloud',
    icon: <Cloud className="text-royal" size={24} />,
    skills: ['GCP', 'Azure']
  },
  {
    title: 'Soft Skills',
    icon: <Heart className="text-royal\" size={24} />,
    skills: ['Administration', 'Teamwork', 'Time Management']
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section bg-light-dark">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title pb-4">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="card card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold ml-3">{category.title}</h3>
              </div>
              <div className="flex flex-wrap">
                {category.skills.map(skill => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;