import { useRef } from "react";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { ProjectGallery } from "@/components/ProjectGallery";
import { Testimonials } from "@/components/Testimonials";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Hero onCTAClick={scrollToContact} />
      <Services />
      <Process />
      <ProjectGallery />
      <Testimonials />
      <WhyChooseUs />
      <div ref={contactRef}>
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
