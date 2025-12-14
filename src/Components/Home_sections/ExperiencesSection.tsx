import { Badge } from "../ui/badge";

export const ExperiencesSection = () => {
  return (
    <section id="Winter" className="relative px-4 py-12 sm:px-8 sm:py-24 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-16">
          <div className="flex-1">
            <h2 className="[font-family:'Inter_Variable-Bold',Helvetica] font-bold text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[-2.56px] leading-tight sm:leading-normal md:leading-relaxed lg:leading-[4rem]">
              Curated
              <br />
              Experiences.
            </h2>
            <div className="relative inline-block">
              <Badge className="h-5 w-5 flex items-center justify-center bg-[#222222] text-white text-xs rounded-[9.99px] p-0 absolute -right-3 sm:-right-5 top-0 ">
                4
              </Badge>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-6 md:gap-8 pt-6 md:pt-32">
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-[#222222] rounded-sm" />
              <span className="[font-family:'Roboto_Mono',Helvetica] font-bold text-black text-xs sm:text-sm tracking-[0.70px] leading-[13.3px]">
                MADE FOR MOODS, NOT JUST MAPS
              </span>
            </div>
            <p className="[font-family:'Inter_Variable-Bold',Helvetica] font-bold text-[#666666] text-sm sm:text-base tracking-[-0.32px] leading-[19.6px]">
              We're starting with winter the season that gives you permission to slow down, stay close to the fire, and feel exactly where you are.
            </p>
          </div>
          <div className="  [font-family:'Inter_Variable-Bold',Helvetica] font-bold text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[-2.56px] leading-tight sm:leading-normal md:leading-relaxed lg:leading-[4rem]   hidden md:block">
            ©25
          </div>
        </div>
      </div>
    </section>
  );
};
