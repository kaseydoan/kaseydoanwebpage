
import { motion } from 'framer-motion';
import { SiReact, SiNodedotjs, SiPython, SiJavascript, SiAmazon, SiDocker, SiGit } from 'react-icons/si';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { profileData } from '@/data/profile-data';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

interface SkillListProps {
  skills: Array<{ name: string; proficiency: number; }>;
  isVisible: boolean;
}

function SkillList({ skills, isVisible }: SkillListProps) {
  return (
    <div className="space-y-3">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm"
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          variants={fadeInUp}
          transition={{ delay: index * 0.1 }}
        >
          <div className="w-2 h-2 bg-soft-gray rounded-full"></div>
          <span className="font-medium text-charcoal">{skill.name}</span>
        </motion.div>
      ))}
    </div>
  );
}

export default function TechnicalSkills() {
  const { ref, isVisible } = useIntersectionObserver();

  const techIcons = [
    SiReact, SiNodedotjs, SiPython, SiJavascript, 
    SiAmazon, SiDocker, SiGit
  ];

  return (
    <section id="skills" className="py-12 bg-cream-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Technical Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Full-stack proficiency with modern technologies and frameworks
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Languages & Frameworks */}
          <motion.div
            initial="initial"
            animate={isVisible ? "animate" : "initial"}
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-semibold text-charcoal mb-8">
              Languages & Frameworks
            </h3>
            <SkillList skills={profileData.skills.languages} isVisible={isVisible} />
          </motion.div>

          {/* Tools & Services */}
          <motion.div
            initial="initial"
            animate={isVisible ? "animate" : "initial"}
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-semibold text-charcoal mb-8">
              Tools & Services
            </h3>
            <SkillList skills={profileData.skills.tools} isVisible={isVisible} />
          </motion.div>
        </div>

        {/* Tech Stack Icons */}
        <motion.div 
          className="text-center"
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          variants={staggerContainer}
        >
          <h3 className="text-2xl font-semibold text-charcoal mb-8">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {techIcons.map((Icon, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-4xl text-muted-foreground hover:text-soft-gray transition-colors duration-300 cursor-pointer"
              >
                <Icon />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
