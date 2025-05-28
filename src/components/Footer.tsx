import React from 'react';
import { Link } from 'react-scroll';
import { Linkedin, Mail, Phone, MapPin, Github, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-midnight text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-playfair font-bold mb-4">
              <span className="text-gold">G</span>iresh
            </h3>
            <p className="mb-4 text-light-dark">
              Full-Stack & ML Engineer with a passion for creating innovative solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/in/giresh‑raju‑47b45b258" target="_blank" rel="noopener noreferrer" className="text-light hover:text-gold transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-light hover:text-gold transition-colors">
                <Github size={20} />
              </a>
              <a href="mailto:a.gireshraju@gmail.com" className="text-light hover:text-gold transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Education'].map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase()}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-light-dark hover:text-gold transition-colors cursor-pointer"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="mr-3 mt-1 text-gold" />
                <span>+91 95027 75397</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-3 mt-1 text-gold" />
                <span>a.gireshraju@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 text-gold" />
                <span>Tanuku, Andhra Pradesh</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
            <form className="space-y-3">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full px-4 py-2 bg-charcoal border border-charcoal-light rounded focus:outline-none focus:border-gold text-white"
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full px-4 py-2 bg-charcoal border border-charcoal-light rounded focus:outline-none focus:border-gold text-white"
              />
              <textarea 
                placeholder="Message" 
                rows={3}
                className="w-full px-4 py-2 bg-charcoal border border-charcoal-light rounded focus:outline-none focus:border-gold text-white"
              ></textarea>
              <button className="btn btn-secondary">Send Message</button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-charcoal-light mt-8 pt-8 text-center text-light-dark">
          <p>© {new Date().getFullYear()} Giresh Raju Adimulam. All rights reserved.</p>
          <p className="mt-2 flex items-center justify-center">
            Built with <Heart size={16} className="mx-1 text-gold" fill="currentColor" /> by Giresh
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;