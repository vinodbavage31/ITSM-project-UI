import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OverviewSection from "@/components/OverviewSection";
import BusinessProblemsSection from "@/components/BusinessProblemsSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import TechStackSection from "@/components/TechStackSection";
import PerformanceSection from "@/components/PerformanceSection";
import WorkflowSection from "@/components/WorkflowSection";
import RepositorySection from "@/components/RepositorySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <OverviewSection />
        <section id="solutions">
          <BusinessProblemsSection />
        </section>
        <section id="architecture">
          <ArchitectureSection />
        </section>
        <TechStackSection />
        <section id="performance">
          <PerformanceSection />
        </section>
        <WorkflowSection />
        <RepositorySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
