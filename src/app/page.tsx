import AboutMe from "@/components/AboutMe";
import ContactForm from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import SkillSection from "@/components/SkillSection";
import TopNavbar from "@/components/TopNavbar";

export default function Home() {
  return (
    <>
      <TopNavbar />
      <HeroSection />
      <ServicesSection />
      <AboutMe />
      <SkillSection />
      <ProjectsSection />
      <ContactForm />
      <Footer />
    </>
  );
}
