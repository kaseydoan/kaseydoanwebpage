import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { profileData } from '@/data/profile-data';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

export default function EducationSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="education" className="py-12 bg-warm-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
        >
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
              Education
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Academic foundation in Computer Science with focus on innovative software development
            </p>
          </motion.div>

          <div className="space-y-8">
            {profileData.education.map((edu, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-8 shadow-sm border border-border"
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-light-gray rounded-full p-3 mt-1">
                    <GraduationCap className="w-6 h-6 text-soft-gray" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-bold text-charcoal">
                        {edu.degree}
                      </h3>
                      <span className="text-sm text-muted-foreground bg-cream-white px-3 py-1 rounded-full">
                        {edu.period}
                      </span>
                    </div>
                    <h4 className="text-lg text-soft-gray font-semibold mb-2">
                      {edu.institution}
                    </h4>
                    {edu.degree.includes("B.S.") && (
                      <p className="text-muted-foreground">
                        Relevant Coursework: Artificial Intelligence, Machine Learning, Software Construction, Big Data Management, Data Structures & Algorithms, Computer Security, Machine Organization & Assembly Programming, Discrete Structures, Automata & Formal Languages.
                      </p>
                    )}
                    {edu.degree.includes("M.S.") && (
                      <p className="text-muted-foreground">
                        Graduate focus on software engineering, systems design, and applied machine learning.
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Academic Highlights */}
          <motion.div 
            className="mt-16 grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            animate={isVisible ? "animate" : "initial"}
          >
            {/* <motion.div 
              className="text-center p-6 bg-white rounded-lg shadow-sm"
              variants={fadeInUp}
            >
              <div className="text-3xl font-bold text-soft-gray mb-2">2025</div>
              <div className="text-muted-foreground">Bachelor's Graduation</div>
            </motion.div> */}
            {/* <motion.div 
              className="text-center p-6 bg-white rounded-lg shadow-sm"
              variants={fadeInUp}
            >
              <div className="text-3xl font-bold text-soft-gray mb-2">2026</div>
              <div className="text-muted-foreground">Master's Completion</div>
            </motion.div> */}
            {/* <motion.div 
              className="text-center p-6 bg-white rounded-lg shadow-sm"
              variants={fadeInUp}
            >
              <div className="text-3xl font-bold text-soft-gray mb-2">UCR</div>
              <div className="text-muted-foreground">University of California</div>
            </motion.div> */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}