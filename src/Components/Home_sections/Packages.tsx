import pck from "../../assets/untitled-design--9--1-1.png"
import pck1 from "../../assets/untitled-design--9--1-2.png"
import pck2 from "../../assets/untitled-design--9--1.png"
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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

export const PackagesSection = () => {
  return (
   <>
   <motion.p 
     initial={{ opacity: 0, y: 20 }}
     whileInView={{ opacity: 1, y: 0 }}
     viewport={{ once: true }}
     transition={{ duration: 0.6 }}
     className="text-center text-gray-700 max-w-2xl mx-auto mb-12 text-lg md:text-base"
   >
     whether you're chasing a destination or a feeling, every journey is hand-built. culture. comfort. curiosity.
   </motion.p>
   <div className="w-full flex flex-col  items-center py-16 px-6">
      {/* Cards Row - Stagger grid appearance */}
     <div className="flex flex-col items-center gap-10 w-full mb-10">
        {packages.map((pkg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="w-[50%] h-[20%]"
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
        ))}
      </div>

      {/* Subtitle */}
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-gray-700 mb-6 text-sm md:text-base"
      >
        We simplify. You explore
      </motion.p>

      {/* Button */}
      <Link to="/experiences">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-80 flex items-center gap-5 bg-black text-white px-8 py-3 rounded-full text-xl md:text-base hover:bg-gray-800 transition"
        >
          <span className="w-8 h-8 text-2xl flex items-center justify-center bg-white text-black rotate-315 rounded-full text-center">→</span>
          View winter experiences
        </motion.button>
      </Link>
    </div>
    </>
  );
}
