import { ArrowRightIcon } from "lucide-react";
import { Button } from "../ui/buttons";
import { Card, CardContent } from "../ui/card";
import { Navbar } from "../ui/Navbar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { heroVariants, staggerContainer, fadeUp } from "../lib/animations";
import { useScrollAnimations } from "../lib/useScrollAnimations";
const experienceData = [
  {
    title: "A London Christmas",
    image: "https://c.animaapp.com/miu74dag18RXJR/img/rectangle-129.png",
    delay: "0ms",
    description:
      "If Christmas Had A Soundtrack, It Would Be Carols In Covent Garden And The Crunch Of Frost In Hyde Park",
    days: "9 Days | London",
    id: "london"
  },
  {
    title: "A Parisian Noël",
    image: "https://c.animaapp.com/miu74dag18RXJR/img/rectangle-129-3.png",
    delay: "200ms",
    description:
      "Paris In Winter Is For People Who Know That Gray Skies Make The Lights Glow Brighter.",
    days: "7 Days | Paris",
    id: "paris"
  },
  {
    title: "A Week With Santa",
    image: "https://c.animaapp.com/miu74dag18RXJR/img/rectangle-129-1.png",
    delay: "400ms",
    description:
      "If You've Ever Wanted To Feel Eight Years Old Again, This Is How.",
    days: "7 Days | Lapland, Finland",
    id: "lapland"
  },
  {
    title: "A New York Christmas",
    image: "https://c.animaapp.com/miu74dag18RXJR/img/rectangle-129-2.png",
    delay: "600ms",
    description: "You've Seen It In Your Favourite Movie. Now Live It.",
    days: "5 Days | New York City",
    id: "london"
  },
];

export const Experiences = () => {
  const navigate = useNavigate();
  useScrollAnimations();
  
  useEffect(() => {
    const firstSection = document.getElementById("winter-first");
    if (firstSection) {
      firstSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <>

     <div id=""
      className=" "
      data-model-id="101:368"
    >    
      <div id='winter-first' className="w-full relative">
        <section className=" w-full h-[1010px] bg-[url('https://c.animaapp.com/miu74dag18RXJR/img/rectangle-24.png')]">
      <Navbar/>

          

          <motion.div 
            initial="hidden"
            animate="visible"
            custom={0.2}
            variants={heroVariants}
            className="absolute top-[409px] left-1/2 -translate-x-1/2 w-full max-w-[559px] flex items-center justify-center z-10">
            <h1 className="[font-family:'BDO_Grotesk-DemiBold',Helvetica] font-bold text-black text-[64px] text-center tracking-[-2.30px] leading-[70px]">
              Winter Elsewhere?
            </h1>
          </motion.div>

          <motion.div 
            initial="hidden"
            animate="visible"
            custom={0.4}
            variants={heroVariants}
            className="absolute top-[546px] left-1/2 -translate-x-1/2 z-10">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className="h-[54px] px-[35px] rounded-[50px] border-[3px] border-solid border-black bg-transparent hover:bg-black hover:text-white transition-colors"
              >
                <span className="[font-family:'BDO_Grotesk-Light',Helvetica] font-light text-[22px] tracking-[0] leading-[80px]">
                  explore experiences
                </span>
              </Button>
            </motion.div>
          </motion.div>

        </section>
     <motion.section 
       initial="hidden"
       whileInView="visible"
       viewport={{ once: true, amount: 0.3 }}
       variants={fadeUp}
       className="w-full flex items-center justify-center px-4 py-12">
      <p className="max-w-[1186px] [font-family:'BDO_Grotesk-Regular',Helvetica] font-normal text-black text-xl md:text-2xl lg:text-[41.6px] text-center tracking-[0] leading-relaxed md:leading-[50px]">
        <span className="[font-family:'BDO_Grotesk-Regular',Helvetica] font-normal text-black text-xl md:text-2xl lg:text-[41.6px] tracking-[0] leading-relaxed md:leading-[50px]">
          There are places that only{" "}
        </span>
        <span className="[font-family:'BDO_Grotesk-Bold',Helvetica] font-bold">
          reveal themselves in December
        </span>
        <span className="[font-family:'BDO_Grotesk-Regular',Helvetica] font-normal text-black text-xl md:text-2xl lg:text-[41.6px] tracking-[0] leading-relaxed md:leading-[50px]">
          . When the crowds thin out, the lights come on, and the cold gives you
          an excuse to stay close to the fire, the wine, the person next to you.
        </span>
      </p>
    </motion.section>
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer}
      className="w-full py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[90px] max-w-[1387px] mx-auto">
        {experienceData.map((experience, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            initial="rest"
            whileHover="hover"
            className="relative h-[500px] md:h-[650px] overflow-hidden rounded-[20px] border-0 shadow-none"
          >
          <Card className="h-full">
            <CardContent className="p-0 h-full ">
              <img
                className="w-full h-full object-cover "
                alt={experience.title}
                src={experience.image}
              />

              <div className="absolute inset-0  bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-[17px]">
                <h3 className=" [text-shadow:0px_4px_26px_#00000040] [font-family:'BDO_Grotesk-Black',Helvetica] font-black text-white text-[40px] tracking-[0] leading-[40px]">
                  {experience.title}
                </h3>
                <h4 className=" text-white leading-[40px] text-[25px] font-bold">{experience.days}</h4>
                <p className="w-[70%] text-[15px] text-white pb-4 pt-2">
                  {experience.description}
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="ghost"
                    onClick={() => navigate(`/itenary/${experience.id}`)}
                    className="w-[173px] h-[45px] bg-[#ffffff52] hover:bg-[#ffffff70] rounded-[42px] backdrop-blur-[19.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(19.5px)_brightness(100%)] transition-colors p-0"
                  >
                  <span className="flex items-center justify-between w-full px-4">
                    <span className="[font-family:'BDO_Grotesk-Regular',Helvetica] font-normal text-[#f0f0f0] text-sm tracking-[0] leading-7">
                      View Itinerary
                    </span>
                    <span className="flex items-center justify-center w-[38px] h-[38px] bg-[#d9d9d9] rounded-[19px] ml-2">
                      <ArrowRightIcon className="w-[18px] h-[18px] text-black" />
                    </span>
                  </span>
                  </Button>
                </motion.div>
              </div>
            </CardContent>
          </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="w-full flex items-center justify-center py-16 px-4">
      <h2 className="max-w-[1070px] [font-family:'BDO_Grotesk-Regular',Helvetica] font-normal text-3xl md:text-6xl text-center tracking-[-1.00px] leading-[50px]">
        <span className="text-[#0000004c] tracking-[-0.60px]">
          Reserve any Upcoming Experience from above for yourself with{" "}
        </span>
        <span className="text-[#000000d1] tracking-[-0.60px]">
          not giving a single penny on reservation
        </span>
      </h2>
    </motion.section>
    </div>
    </div>
    </>
  );
};

