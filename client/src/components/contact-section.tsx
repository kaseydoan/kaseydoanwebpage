import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';
import { profileData } from '@/data/profile-data';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

export default function ContactSection() {
  const { ref, isVisible } = useIntersectionObserver();

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: profileData.personal.email,
      href: `mailto:${profileData.personal.email}`
    },
    {
      icon: Phone,
      label: "Phone",
      value: profileData.personal.phone,
      href: `tel:${profileData.personal.phone.replace(/[^\d]/g, '')}`
    },
    {
      icon: MapPin,
      label: "Location",
      value: profileData.personal.location,
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: profileData.personal.linkedin
    },
    {
      icon: Github,
      href: profileData.personal.github
    },
    {
      icon: Mail,
      href: `mailto:${profileData.personal.email}`
    }
  ];

  return (
    <section id="contact" className="py-12 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">


        <div className="flex justify-center">
          {/* Contact Information */}
          <motion.div
            className="max-w-2xl w-full"
            initial="initial"
            animate={isVisible ? "animate" : "initial"}
            variants={fadeInUp}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-charcoal mb-6">Get In Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-light-grey rounded-lg flex items-center justify-center">
                      <info.icon className="text-charcoal text-xl" size={20} />
                    </div>
                    <div>
                      <div className="font-medium text-charcoal">{info.label}</div>
                      {info.href ? (
                        <a 
                          href={info.href} 
                          className="text-medium-grey hover:text-charcoal transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-medium-grey">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-charcoal mb-4">Connect Online</h4>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-charcoal text-white rounded-lg flex items-center justify-center hover:bg-soft-black transition-colors"
                  >
                    <link.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}

          </motion.div>


        </div>
      </div>
    </section>
  );
}
