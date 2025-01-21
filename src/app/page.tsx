import ContactForm from "@/components/ContactForm";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import TopNavbar from "@/components/TopNavbar";

export default function Home() {
  return (
    <>
      <TopNavbar />
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactForm />
    </>
  );
}
