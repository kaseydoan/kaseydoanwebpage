import { motion } from 'framer-motion';
import { Linkedin, Github, Mail } from 'lucide-react';
import { profileData } from '@/data/profile-data';
import { fadeInUp } from '@/lib/animations';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      href: profileData.personal.linkedin,
      label: 'LinkedIn'
    },
    {
      icon: Github,
      href: profileData.personal.github,
      label: 'GitHub'
    },
    {
      icon: Mail,
      href: `mailto:${profileData.personal.email}`,
      label: 'Email'
    }
  ];

  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="text-2xl font-bold mb-4">{profileData.personal.name}</div>

          
          <div className="flex justify-center gap-6 mb-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
          

        </motion.div>
      </div>
    </footer>
  );
}
