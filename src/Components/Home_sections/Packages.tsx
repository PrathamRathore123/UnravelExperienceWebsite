import pck from "../../assets/untitled-design--9--1-1.png"
import pck1 from "../../assets/untitled-design--9--1-2.png"
import pck2 from "../../assets/untitled-design--9--1.png"
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import useIsInView from "../lib/useIsInView";
import { useEffect, useRef, useState } from "react";


const packages = [
  {
    id: "paris",
    image: pck,
  },
  {
    id: "london",
    image:pck1,
  },
  {
    id: "lapland",
    image: pck2,
  },
];

const PackageCard = ({ pkg, index, cardProgress, cardsRef }: { pkg: typeof packages[0], index: number, cardProgress: number[], cardsRef: React.MutableRefObject<(HTMLDivElement | null)[]> }) => {
  const progress = cardProgress[index];
  
  // Progress 0-1: Coming from bottom (entrance)
  // Progress 1-2: Going to top (exit)
  let translateY, rotateX, scale, opacity;
  
  if (progress <= 1) {
    // Entrance animation: flip up from bottom
    translateY = 200 - (progress * 200); // From 200px to 0px
    rotateX = 90 - (progress * 90); // From 90deg to 0deg
    scale = 0.8 + (progress * 0.2); // From 0.8 to 1
    opacity = 1;
  } else {
    // Exit animation: continue flipping up and move upwards
    const exitProgress = progress - 1; // 0 to 1
    translateY = 0 - (exitProgress * 200); // From 0px to -200px
    rotateX = 0 - (exitProgress * 90); // From 0deg to -90deg
    scale = 1 - (exitProgress * 0.2); // From 1 to 0.8
    opacity = 1;
  }

  return (
    <motion.div
      ref={(el) => { cardsRef.current[index] = el; }}
      animate={{
        y: translateY,
        rotateX: rotateX,
        scale: scale,
        opacity: opacity
      }}
      transition={{ duration: index === 1 ? 0.05 : 0.1, ease: "linear" }}
      className="w-[80%] h-[40%] md:w-[40%] md:h-[30%] opacity-80 md:opacity-100"
    >
      <Link to={`/itenary/${pkg.id}`}>
        <motion.div
          whileHover={{ scale: 1.03, y: -8 }}
          transition={{ duration: 0.3 }}
          className="w-[100%] h-[100%] rounded-2xl overflow-hidden shadow-lg cursor-pointer relative"
        >
          {/* Idle slow zoom */}
          <motion.img
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            src={pkg.image}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </Link>
    </motion.div>
  );
};

const AnimatedParagraph = () => {
  const { ref, isInView } = useIsInView();
  const [hasAnimated, setHasAnimated] = useState(false);

  if (isInView && !hasAnimated) {
    setHasAnimated(true);
  }

  return (
    <motion.p
      ref={ref as React.RefObject<HTMLParagraphElement>}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: hasAnimated ? 1 : 0, y: hasAnimated ? 0 : 20 }}
      transition={{ duration: 0.6 }}
      className="text-center text-gray-700 max-w-2xl mx-auto mb-12 text-lg md:text-base"
    >
      whether you're chasing a destination or a feeling, every journey is hand-built. culture. comfort. curiosity.
    </motion.p>
  );
};

const AnimatedButton = () => {
  const { ref, isInView } = useIsInView();
  const [hasAnimated, setHasAnimated] = useState(false);

  if (isInView && !hasAnimated) {
    setHasAnimated(true);
  }

  return (
    <Link to="/experiences">
      <motion.button
        ref={ref as React.RefObject<HTMLButtonElement>}
        initial={{ opacity: 0 }}
        animate={{ opacity: hasAnimated ? 1 : 0 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="md:w-70  flex items-center gap-5 bg-black text-white px-2 py-2 md:px-5 md:py-3 rounded-full text-xl md:text-sm hover:bg-gray-800 transition"
      >
        <span className="w-8 h-8 text-2xl flex items-center justify-center bg-white text-black -rotate-25  rounded-full text-center leading-none">→</span>
        View winter experiences
      </motion.button>
    </Link>
  );
};

const AnimatedSubtitle = () => {
  const { ref, isInView } = useIsInView();
  const [hasAnimated, setHasAnimated] = useState(false);

  if (isInView && !hasAnimated) {
    setHasAnimated(true);
  }

  return (
    <motion.p
      ref={ref as React.RefObject<HTMLParagraphElement>}
      initial={{ opacity: 0 }}
      animate={{ opacity: hasAnimated ? 1 : 0 }}
      transition={{ duration: 0.6 }}
      className="text-center text-gray-700 mb-6 text-sm md:text-base"
    >
      We simplify. You explore
    </motion.p>
  );
};

export const PackagesSection = () => {
  const [cardProgress, setCardProgress] = useState([0, 0, 0]); // 0 to 1 progress for each card
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      cardsRef.current.forEach((card, index) => {
        if (card) {
          const rect = card.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          
          const cardCenter = rect.top + rect.height / 2;
          const triggerStart = windowHeight * 0.9; // Start animation when card is near bottom
          const triggerMiddle = windowHeight * 0.5; // Card fully visible at center
          const triggerEnd = windowHeight * 0.1; // Start exit animation when card is near top
          
          let progress = 0;
          
          // Coming from bottom (0 to 1)
          if (cardCenter <= triggerStart && cardCenter >= triggerMiddle) {
            progress = (triggerStart - cardCenter) / (triggerStart - triggerMiddle);
            progress = Math.max(0, Math.min(1, progress));
          } 
          // Fully visible in center (1)
          else if (cardCenter < triggerMiddle && cardCenter >= triggerEnd) {
            progress = 1;
          }
          // Exiting upwards (1 to 2)
          else if (cardCenter < triggerEnd) {
            const exitProgress = (triggerEnd - cardCenter) / (triggerEnd);
            progress = 1 + Math.min(1, exitProgress); // 1 to 2
          }
          // Not yet visible (0)
          else {
            progress = 0;
          }
          
          setCardProgress(prev => {
            const newProgress = [...prev];
            newProgress[index] = progress;
            return newProgress;
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
   <>
   <AnimatedParagraph />
   <div className="w-full flex flex-col  items-center py-16 px-6 " style={{ perspective: '1000px' }}>
      {/* Cards Row - Stagger grid appearance */}
     <div className="flex flex-col items-center gap-5 w-full mb-10 ">
        {packages.map((pkg, index) => (
          <PackageCard key={index} pkg={pkg} index={index} cardProgress={cardProgress} cardsRef={cardsRef} />
        ))}
      </div>

      {/* Subtitle */}
      <AnimatedSubtitle />

      {/* Button */}
      <AnimatedButton />
    </div>
    </>
  );
}
