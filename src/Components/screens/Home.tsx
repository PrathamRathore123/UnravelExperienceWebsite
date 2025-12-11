
import { HeroSection } from "../Home_sections/HeroSection";
import { ExperiencesSection } from "../Home_sections/ExperiencesSection";
import { TestimonialsSection } from "../Home_sections/TestimonialsSection";
import { Header } from "../ui/Header";
import { MomentsDump } from "../Home_sections/Moment";
import { MembershipSection } from "../Home_sections/MembershipSection";
import { NewWaysToWander } from "../Home_sections/NewwaysTowander";
import {PackagesSection} from '../Home_sections/Packages';
import { AboutSection } from "../Home_sections/AboutUs";
import { FeaturesSection } from "../Home_sections/FeaturesSection";
import { NavbarOne } from '../ui/Navbar'
import { Travellers } from "../Home_sections/Travellers";
export const HomeLandingPage = () => {
  return (
    <div className="relative w-full min-h-screen bg-white">
      <div className="overflow-hidden">
          <Header/>
        <HeroSection />
      </div>
      <NavbarOne />
      <div className="overflow-hidden">
        <FeaturesSection />
        <AboutSection />
        <ExperiencesSection  />
        <PackagesSection />
        <NewWaysToWander />
        <MembershipSection />
        <MomentsDump/>  
        <TestimonialsSection />
        <Travellers></Travellers>
      </div>
    </div>
  );
};
