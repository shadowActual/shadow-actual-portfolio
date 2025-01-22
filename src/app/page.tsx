import ContactForm from "@/components/ContactForm";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillSection from "@/components/SkillSection";
import TopNavbar from "@/components/TopNavbar";

export default function Home() {
  return (
    <>
      <TopNavbar />
      <HeroSection />
      <SkillSection />
      <ProjectsSection />
      <ContactForm />
    </>
  );
}
