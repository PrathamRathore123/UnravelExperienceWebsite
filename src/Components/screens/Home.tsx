
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
import { NavbarOne } from '../ui/Navbar'
import { Travellers } from "../Home_sections/Travellers";
import { HumanSupport } from "../Home_sections/HumanSupport.tsx";
import { AboutM } from "../Home_sections/AboutM.tsx";

export const HomeLandingPage = () => {
  return (
    <div className="relative w-full  bg-white ">
      <div className="block md:hidden">
        <NavbarOne />
      </div>
      <div className="overflow-hidden">
        <div className="hidden md:block">
          <Header />
        </div>
        <HeroSection />
      </div>
      <div className="hidden md:block"><NavbarOne /></div>

      <div className="px-4 sm:px-6 lg:px-8">
        <FeaturesSection />
        <div className="block md:hidden"> <HumanSupport></HumanSupport></div>
        <div className="hidden md:block">  <AboutSection /></div>
        <div className="block md:hidden"><AboutM></AboutM> </div>
        <ExperiencesSection />
        <PackagesSection />
        <NewWaysToWander />
        <MembershipSection />

        <MomentsDump />
        <TestimonialsSection />

      </div>
      <Travellers></Travellers>
    </div>
  );
};
