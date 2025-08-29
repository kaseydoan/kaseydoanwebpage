import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, fadeInUp, staggerContainer } from '@/lib/animations';
import { profileData } from '@/data/profile-data';
import heroImage from '@assets/header.png';

export default function HeroSection() {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'Doan';

  useEffect(() => {
    let currentIndex = 0;
    const typingSpeed = 150;
    
    const typeText = () => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeText, typingSpeed);
      } else {
        setTimeout(() => setShowCursor(false), 1000);
      }
    };

    const startTyping = setTimeout(() => {
      typeText();
    }, 1000);

    // Cursor blink effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearTimeout(startTyping);
      clearInterval(cursorInterval);
    };
  }, []);

  const handleContactClick = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${profileData.personal.email}`;
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-warm-white/85 via-warm-white/75 to-cream-white/85" />
      <div className="absolute inset-0 bg-gradient-to-t from-warm-white/60 via-transparent to-warm-white/40" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div 
          className="text-center mb-16"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-charcoal drop-shadow-sm"
            variants={fadeIn}
          >
            Kasey Doan
          </motion.h1>

          <motion.div 
            className="mb-8 max-w-4xl mx-auto"
            variants={fadeInUp}
          >
            <p className="text-2xl md:text-3xl font-semibold text-charcoal mb-4">
              Aspiring Software Engineer
            </p>
            <p className="text-lg md:text-xl text-black leading-relaxed mb-4 font-bold">
              Passionate about using technology to bridge opportunity gaps and serve underrepresented communities. 
              Currently pursuing a M.S. in Computer Science at UC Riverside.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-black">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-black rounded-full"></span>
                <span className="font-bold">3+ Years Internship Experience</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={fadeInUp}
          >
            <button
              onClick={handleContactClick}
              className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 font-medium"
            >
              Get In Touch
            </button>
            <button
              onClick={handleEmailClick}
              className="border border-black text-black px-8 py-3 rounded-lg hover:bg-black hover:text-white transition-all duration-300 font-medium"
            >
              Email Me
            </button>
          </motion.div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-slide-up"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {profileData.stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center"
              variants={fadeInUp}
            >
              <div className="text-3xl md:text-4xl font-bold text-charcoal mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
