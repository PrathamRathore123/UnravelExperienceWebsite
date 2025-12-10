import { Button } from "../ui/buttons";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center mt-[218px] mb-32">
      <div className="absolute inset-0 rounded-[32px] overflow-hidden">
        <div className="absolute inset-0 bg-[url(https://c.animaapp.com/min3uh9qPFGdoq/img/gently-flowing-shiny-golden-wavy-lines-full-hd-and-looping-abstr-1.png)] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black to-[rgba(46,0,0,0.78)]" />
      </div>
      <div className="relative z-10 flex flex-col items-center gap-8 px-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <div className="[font-family:'Roboto_Mono',Helvetica] font-normal text-[#ffffffb2] text-sm tracking-[0.70px] leading-[19.6px]">
          TRAVEL, UNRAVELED
        </div>
        <h1 className="[font-family:'BDO_Grotesk-Medium',Helvetica] font-medium text-white text-[50px] text-center tracking-[-0.88px] leading-[50px] max-w-[647px]">
          Less planning. More living.
          <br />
          We handle the details. You collect the stories.
        </h1>
        <p className="[font-family:'BDO_Grotesk-Regular',Helvetica] font-normal text-[#ffffffb2] text-xl text-center tracking-[0.70px] leading-[27px] max-w-[684px]">
          Starting With Winter. Because Some Places Only Make Sense When it's Cold Outside And The Lights Come On.
        </p>
        <a href={'#Winter'}><Button className="h-14 px-7 bg-white text-black rounded-[30px] [font-family:'Inter_Variable-Bold',Helvetica] font-bold text-[15px] tracking-[0.70px] hover:bg-gray-100 transition-colors">
          Explore Winter Experiences
        </Button>
        </a>
      </div>
      <div className="absolute bottom-14 left-1/2 -translate-x-1/2">
        <img className="w-[260px] h-[19.59px]" alt="Mask group" src="https://c.animaapp.com/min3uh9qPFGdoq/img/mask-group.svg" />
      </div>
    </section>
  );
};
