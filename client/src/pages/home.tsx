import Navigation from '@/components/navigation';
import HeroSection from '@/components/hero-section';
import PhotoSection from '@/components/photo-section';
import ExperienceTimeline from '@/components/experience-timeline';
import EducationSection from '@/components/education-section';
import LeadershipSection from '@/components/leadership-section';
import TechnicalSkills from '@/components/technical-skills';

import ProjectsSection from '@/components/projects-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <PhotoSection />
      <ExperienceTimeline />
      <EducationSection />
      <LeadershipSection />
      <TechnicalSkills />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
