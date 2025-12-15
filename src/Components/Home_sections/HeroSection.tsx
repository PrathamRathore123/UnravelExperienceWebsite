import { Button } from "../ui/buttons";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const HeroSection = () => {
  const [shutterComplete, setShutterComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShutterComplete(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative  h-[90vh] md:min-h-screen flex items-center justify-center mt-30 md:mt-[218px] mb-32 mx-2">
      {/* Black shutter reveal */}
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
        className="fixed inset-0 bg-black z-50 origin-top"
      />

      {/* Parallax background */}
      <motion.div 
        className="absolute inset-0 rounded-[32px]  overflow-hidden"
        style={{ y: 0 }}
        whileInView={{ y: -50 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-[url(../src/assets/HeroSectionIMage.jpg)] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-50% via-black/70  to-black/70  " >
      <motion.h3
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
            className=" block md:hidden   [font-family:'BDO_Grotesk-Medium',Helvetica] relative z-10 font-medium text-white text-xl text-center mt-5 tracking-[-0.88px] leading-tight md:leading-[50px] max-w-[647px]"
          >
          Digital Experience Design
        </motion.h3>
        <motion.hr     initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
           className="  block md:hidden   w-[80%] border border-b-white border-dotted border-2 m-auto mt-3" />
      </div>
      </motion.div>

      {shutterComplete && (
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}

        >
       


          <div className="relative z-10 flex flex-col md:items-center gap-8 px-8">
          {/* Subline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="[font-family:'Roboto_Mono',Helvetica] font-normal text-[#ffffffb2] text-sm tracking-[0.70px] leading-[19.6px]"
          >
            TRAVEL, UNRAVELED
          </motion.div>

          {/* Hero heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
            className="[font-family:'BDO_Grotesk-Medium',Helvetica] font-medium text-white text-3xl text-4xl lg:text-[50px] md:text-center tracking-[-0.88px] leading-tight md:leading-[50px] max-w-[647px]"
          >
            Less planning. More living.
          
            We handle the details. You collect the stories.
          </motion.h1>

          {/* Subline stagger */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="[font-family:'BDO_Grotesk-Regular',Helvetica] font-normal text-[#ffffffb2] md:text-xl md:text-center tracking-[0.70px] leading-[27px] max-w-[684px]"
          >
            Starting With Winter. Because Some Places Only Make Sense When it's Cold Outside And The Lights Come On.
          </motion.p>

          {/* CTA button slide-up */}
          <motion.a
            href={'#Winter'}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="h-14 md:px-7 bg-white text-black md:rounded-[30px] [font-family:'Inter_Variable-Bold',Helvetica] font-bold text-[15px] tracking-[0.70px] hover:bg-gray-100 transition-colors">
                Explore Winter Experiences
              </Button>
            </motion.div>
          </motion.a>
          </div>
        </motion.div>
      )}

      {/* Scroll indicator marquee */}
      <motion.div
        className="hidden md:block    absolute bottom-14 left-1/2 -translate-x-1/2 overflow-hidden w-80"
      >
        <motion.p
          initial={{ x: '0%', opacity: 0.3, filter: 'blur(2px)' }}
          animate={{ x: '-110%', opacity: [0.3, 1, 0.3], filter: ['blur(1px)', 'blur(0px)', 'blur(1px)'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="text-white whitespace-nowrap  text-[12px]  "
        >
          -scroll to Reveal-scroll to Reveal-scroll to Reveal-scroll to Reveal-scroll Reveal-scroll to Reveal-scroll to Reveal -scroll to Reveal-scroll to Reveal-scroll to Reveal-scroll to Reveal-scroll Reveal-scroll to Reveal-scroll to Reveal -scroll to Reveal-scroll to Reveal-scroll to Reveal-scroll to Reveal-scroll Reveal-scroll to Reveal-scroll to Reveal
        </motion.p>
      </motion.div>
    </section>
  );
};
