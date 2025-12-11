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
    <section className="relative min-h-screen flex items-center justify-center mt-[218px] mb-32">
      {/* Black shutter reveal */}
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
        className="fixed inset-0 bg-black z-50 origin-top"
      />

      {/* Parallax background */}
      <motion.div 
        className="absolute inset-0 rounded-[32px] overflow-hidden"
        style={{ y: 0 }}
        whileInView={{ y: -50 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-[url(https://c.animaapp.com/min3uh9qPFGdoq/img/gently-flowing-shiny-golden-wavy-lines-full-hd-and-looping-abstr-1.png)] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black to-[rgba(46,0,0,0.78)]" />
      </motion.div>

      {shutterComplete && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative z-10 flex flex-col items-center gap-8 px-8"
        >
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
            className="[font-family:'BDO_Grotesk-Medium',Helvetica] font-medium text-white text-[50px] text-center tracking-[-0.88px] leading-[50px] max-w-[647px]"
          >
            Less planning. More living.
            <br />
            We handle the details. You collect the stories.
          </motion.h1>

          {/* Subline stagger */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="[font-family:'BDO_Grotesk-Regular',Helvetica] font-normal text-[#ffffffb2] text-xl text-center tracking-[0.70px] leading-[27px] max-w-[684px]"
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
              <Button className="h-14 px-7 bg-white text-black rounded-[30px] [font-family:'Inter_Variable-Bold',Helvetica] font-bold text-[15px] tracking-[0.70px] hover:bg-gray-100 transition-colors">
                Explore Winter Experiences
              </Button>
            </motion.div>
          </motion.a>
        </motion.div>
      )}

      {/* Scroll indicator floating loop */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-14 left-1/2 -translate-x-1/2"
      >
        <img className="w-[260px] h-[19.59px]" alt="Mask group" src="https://c.animaapp.com/min3uh9qPFGdoq/img/mask-group.svg" />
      </motion.div>
    </section>
  );
};
