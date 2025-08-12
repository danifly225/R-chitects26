import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import Excellence from "@/components/excellence";
import Projects from "@/components/projects";
import Team from "@/components/team";
import Services from "@/components/services";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Excellence />
      <Projects />
      <Team />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
