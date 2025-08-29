import { motion } from 'framer-motion';
import { Medal, Heart, ShoppingCart, GraduationCap, Users, ArrowRight } from 'lucide-react';
import { fadeInUp, staggerContainer, scaleOnHover } from '@/lib/animations';
import { profileData } from '@/data/profile-data';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const iconMap = {
  medal: Medal,
  heartbeat: Heart,
  'shopping-cart': ShoppingCart,
  'graduation-cap': GraduationCap,
  'hands-helping': Users,
};

export default function ProjectsSection() {
  const { ref, isVisible } = useIntersectionObserver();

  const handleViewProject = (projectTitle: string) => {
    alert(`${projectTitle} details would be displayed here in a modal or separate page.`);
  };

  return (
    <section id="projects" className="py-12 bg-light-grey" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Featured Projects
          </h2>
          
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
        >
          {profileData.projects.map((project) => {
            const IconComponent = iconMap[project.icon as keyof typeof iconMap];

            return (
              <motion.div
                key={project.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
              >
                {/* Project Image Placeholder */}
                <div className="w-full h-48 bg-gradient-to-br from-accent-grey to-light-grey flex items-center justify-center group-hover:from-medium-grey group-hover:to-accent-grey transition-all duration-300">
                  {IconComponent && (
                    <IconComponent size={48} className="text-medium-grey group-hover:text-charcoal transition-colors duration-300" />
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    {IconComponent && <IconComponent size={16} className="text-charcoal" />}
                    <span className="text-sm font-semibold text-charcoal">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-charcoal mb-3">
                    {project.title}
                  </h3>

                  <p className="text-medium-grey mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-light-grey text-charcoal text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button 
                    onClick={() => handleViewProject(project.title)}
                    className="text-charcoal font-medium hover:underline flex items-center gap-1 group/btn"
                  >
                    View Project 
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
