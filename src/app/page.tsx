import AboutMe from "@/components/AboutMe";
import { ConnectSection } from "@/components/ConnectSection";
import EduCareerSection from "@/components/EduCareerSection";
import { Footer } from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { NextProject } from "@/components/NextProject";
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
      <EduCareerSection />
      <NextProject />
      <ConnectSection />
      <Footer />
    </>
  );
}
