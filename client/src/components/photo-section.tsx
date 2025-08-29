import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import graduationPhoto from '@assets/Kasey_Doan_Grad_Pic.jpg';

export default function PhotoSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section className="py-8 bg-white" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          variants={fadeInUp}
        >
          {/* Photo Container */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-light-grey to-accent-grey border-4 border-white">
                {/* Professional Photo */}
                <img 
                  src={graduationPhoto} 
                  alt="Kasey Doan - Professional Photo" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-charcoal rounded-full"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-medium-grey rounded-full"></div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}