import { motion } from 'framer-motion';
import { Users, Trophy, Star, CheckCircle } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { profileData } from '@/data/profile-data';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const iconMap = {
  users: Users,
  trophy: Trophy,
  star: Star,
};

export default function LeadershipSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="leadership" className="py-12 bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
        >
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
              Leadership & Involvement
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Community leadership, innovation awards, and mentorship experience across diverse organizations
            </p>
          </motion.div>

          <div className="space-y-12">
            {profileData.leadership.map((role, index) => {
              const IconComponent = iconMap[role.icon as keyof typeof iconMap] || Users;
              
              return (
                <motion.div
                  key={role.id}
                  className="relative"
                  variants={fadeInUp}
                  transition={{ delay: index * 0.2 }}
                >
                  {/* Timeline line */}
                  {index < profileData.leadership.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-24 bg-light-gray md:h-32"></div>
                  )}
                  
                  <div className="flex gap-6">
                    {/* Icon */}
                    <div className="relative flex-shrink-0">
                      <div className="bg-soft-gray rounded-full p-3 shadow-sm">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 bg-white rounded-lg p-6 shadow-sm border border-border">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-charcoal mb-1">
                            {role.title}
                          </h3>
                          <h4 className="text-lg text-soft-gray font-semibold mb-2">
                            {role.organization}
                          </h4>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>{role.location}</span>
                            <span>•</span>
                            <span>{role.period}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {role.description}
                      </p>
                      
                      {/* Achievements */}
                      <div className="grid md:grid-cols-2 gap-3">
                        {role.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-soft-gray mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground leading-relaxed">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Leadership Stats */}
          <motion.div 
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            animate={isVisible ? "animate" : "initial"}
          >
            {/* <motion.div 
              className="text-center p-6 bg-white rounded-lg shadow-sm"
              variants={fadeInUp}
            >
              <div className="text-3xl font-bold text-soft-gray mb-2">500+</div>
              <div className="text-muted-foreground">Community Members Served</div>
            </motion.div>
            <motion.div 
              className="text-center p-6 bg-white rounded-lg shadow-sm"
              variants={fadeInUp}
            >
              <div className="text-3xl font-bold text-soft-gray mb-2">15+</div>
              <div className="text-muted-foreground">Years Teaching Experience</div>
            </motion.div>
            <motion.div 
              className="text-center p-6 bg-white rounded-lg shadow-sm"
              variants={fadeInUp}
            >
              <div className="text-3xl font-bold text-soft-gray mb-2">Award</div>
              <div className="text-muted-foreground">Best Innovation Winner</div>
            </motion.div> */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}