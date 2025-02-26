import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonial";
import Projects from "@/components/Projects";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        <HeroSection />
        <Services />
        <Projects />
        <Testimonials />
        <ContactUs />
        <Footer />
      </main>
    </>
  );
}
