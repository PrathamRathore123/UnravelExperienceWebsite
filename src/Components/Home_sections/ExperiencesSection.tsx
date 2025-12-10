import { Badge } from "../ui/badge";

export const ExperiencesSection = () => {
  return (
    <section id="Winter" className="relative px-8 py-24 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start justify-between gap-16">
          <div className="flex-1">
            <h2 className="[font-family:'Inter_Variable-Bold',Helvetica] font-bold text-black text-[121.6px] tracking-[-2.56px] leading-[108.8px]">
              Curated
              <br />
              Experiences.
            </h2>
            <div className="relative inline-block">
              <Badge className="h-5 w-5 flex items-center justify-center bg-[#222222] text-white text-xs rounded-[9.99px] p-0 absolute -right-5 top-0">
                4
              </Badge>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-8 pt-32">
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-[#222222] rounded-sm" />
              <span className="[font-family:'Roboto_Mono',Helvetica] font-bold text-black text-sm tracking-[0.70px] leading-[13.3px]">
                MADE FOR MOODS, NOT JUST MAPS
              </span>
            </div>
            <p className="[font-family:'Inter_Variable-Bold',Helvetica] font-bold text-[#666666] text-[13.9px] tracking-[-0.32px] leading-[19.6px]">
              We're starting with winter the season that gives you permission to slow down, stay close to the fire, and feel exactly where you are.
            </p>
          </div>
          <div className="[font-family:'Inter_Variable-Bold',Helvetica] font-bold text-black text-[123.6px] tracking-[-2.56px] leading-[108.8px]">
            ©25
          </div>
        </div>
      </div>
    </section>
  );
};
