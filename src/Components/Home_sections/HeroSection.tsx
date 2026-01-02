import { Button } from "../ui/buttons";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Video from "../../assets/1766996316596102.mp4";
import { Link } from "react-router-dom";
export const HeroSection = () => {
  const [shutterComplete, setShutterComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShutterComplete(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative  h-[100vh] md:min-h-screen flex items-center justify-center mt-30 md:mt-[108px] mb-30 mx-6">
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
        <div  className="absolute inset-0  " >
          <video src={Video} autoPlay loop muted className="w-full h-full object-cover"></video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black/90" >
      
        
      </div>
      </motion.div>

      {shutterComplete && (
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}

        >
       


          <div className="relative  z-10 flex flex-col md:items-center gap-8 px-8">
          {/* Subline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="[font-family:'Roboto_Mono',Helvetica] font-normal text-[#ffffffb2] text-sm tracking-[0.70px] leading-[10.6px]"
          >
            TRAVEL, UNRAVELED
          </motion.div>

          {/* Hero heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
            className="[font-family:'BDO_Grotesk-Medium',Helvetica] font-medium text-white  text-3xl lg:text-[40px] md:text-center tracking-[-0.88px] leading-tight md:leading-[50px] max-w-[647px]"
          >
            Less planning. More living.
          
       
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to={'/experiences'}>
              <Button className="h-10 md:px-6 bg-white text-black md:rounded-[30px] [font-family:'Inter_Variable-Bold',Helvetica] font-bold text-[12px] tracking-[0.70px] hover:bg-gray-100 transition-colors">
                Explore Winter Experiences
              </Button>
            </Link>
          </motion.div>
          </div>
        </motion.div>
      )}

     
    </section>
  );
};
