import { HeroSection } from "../Home_sections/HeroSection";
import { ExperiencesSection } from "../Home_sections/ExperiencesSection";
import { TestimonialsSection } from "../Home_sections/TestimonialsSection";
import { Header } from "../ui/Header";
import { MomentsDump } from "../Home_sections/Moment";
import { MembershipSection } from "../Home_sections/MembershipSection";
import { NewWaysToWander } from "../Home_sections/NewwaysTowander";
import { PackagesSection } from '../Home_sections/Packages';
import { AboutSection } from "../Home_sections/AboutUs";
import { FeaturesSection } from "../Home_sections/FeaturesSection";
import { Navbar } from '../ui/Navbar'
import { Travellers } from "../Home_sections/Travellers";
import { AboutM } from "../Home_sections/AboutM.tsx";
import Perks from "../ui/Perks.tsx";

export const HomeLandingPage = () => {
  return (
    <>
    <div className="h-10">
    <Perks></Perks>
    </div>
    <div className="relative w-full bg-white">
      
      <div className="block md:hidden">
        <Navbar/>
      </div>
        <div className="hidden md:block">
          <Header />
        </div>
        <HeroSection />
        <div className="hidden md:block sticky top-0 z-50 w-full"><Navbar /></div>
        <FeaturesSection />
      <div className="hidden md:block">  <AboutSection /></div>
        <div className="block md:hidden"><AboutM></AboutM> </div>
        <ExperiencesSection />
        <PackagesSection />
        <NewWaysToWander />
        <MembershipSection />
        <MomentsDump />
        <TestimonialsSection />
      <Travellers></Travellers>
    </div>
    </>
  );
};
