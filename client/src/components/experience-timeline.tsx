import { motion } from 'framer-motion';
import { Medal, Heart, Users, GraduationCap } from 'lucide-react';
import { fadeInUp, slideInFromLeft, slideInFromRight, staggerContainer } from '@/lib/animations';
import { profileData } from '@/data/profile-data';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const iconMap = {
  medal: Medal,
  heartbeat: Heart,
  'hands-helping': Users,
  'graduation-cap': GraduationCap,
};

export default function ExperienceTimeline() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="experience" className="py-12 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-medium-grey max-w-2xl mx-auto">
            From Olympic-grade software to healthcare innovation, building impactful solutions across industries
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-accent-grey hidden md:block"></div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={isVisible ? "animate" : "initial"}
          >
            {profileData.experience.map((exp, index) => {
              const isEven = index % 2 === 0;
              const IconComponent = exp.icon ? iconMap[exp.icon as keyof typeof iconMap] : null;

              return (
                <motion.div 
                  key={exp.id}
                  className="mb-12 flex flex-col md:flex-row items-center"
                  variants={isEven ? slideInFromLeft : slideInFromRight}
                  style={{ flexDirection: isEven ? 'row' : 'row-reverse' }}
                >
                  <div className={`md:w-1/2 ${isEven ? 'md:pr-8 md:text-right' : 'md:pl-8'} mb-8 md:mb-0`}>
                    <div className="bg-light-grey p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="text-sm font-mono text-medium-grey mb-2">
                        {exp.period}
                      </div>
                      <h3 className="text-xl font-semibold text-charcoal mb-2">
                        {exp.title}
                      </h3>
                      <h4 className="text-lg text-medium-grey mb-3">
                        {exp.company}
                      </h4>
                      <p className="text-medium-grey leading-relaxed mb-4">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span 
                            key={tech}
                            className="px-3 py-1 bg-charcoal text-white text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block w-4 h-4 bg-charcoal rounded-full border-4 border-white shadow-md relative z-10"></div>

                  <div className={`md:w-1/2 ${isEven ? 'md:pl-8' : 'md:pr-8'}`}>
                    {exp.highlight && (
                      <div className="bg-gradient-to-r from-charcoal to-soft-black text-white p-4 rounded-xl">
                        <div className="flex items-center gap-3">
                          {IconComponent && <IconComponent size={24} />}
                          <div>
                            <div className="font-semibold">{exp.highlight}</div>
                            <div className="text-sm opacity-90">
                              {exp.highlight === "Olympic Project" && "2028 Summer Olympics Ready"}
                              {exp.highlight === "Healthcare Innovation" && "120% Performance Improvement"}
                              {exp.highlight === "Community Impact" && "500+ People Helped"}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
