
import pck from "../../assets/untitled-design--9--1-1.png"
import pck1 from "../../assets/untitled-design--9--1-2.png"
import pck2 from "../../assets/untitled-design--9--1.png"
import { Link } from "react-router-dom";
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
   <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12 text-lg md:text-base">
whether you're chasing a destination or a feeling, every journey is hand-built. culture. comfort. curiosity.
</p>
   <div className="w-full flex flex-col  items-center py-16 px-6">
      {/* Cards Row */}
     <div className="flex flex-col items-center gap-10 w-full mb-10">
        {packages.map((pkg, index) => (
          <Link className="w-[50%] h-[20%]" key={index} to={`/itenary/${pkg.id}`}>
            <div
              className="w-[100%] h-[100%] rounded-2xl overflow-hidden shadow-lg cursor-pointer group relative"
            >
              <img
                src={pkg.image}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </Link>
        ))}
      </div>

      {/* Subtitle */}
      <p className="text-center text-gray-700 mb-6 text-sm md:text-base">We simplify. You explore</p>

      {/* Button */}
    <Link to="/experiences"> <button className="w-80 flex items-center gap-5 bg-black text-white px-8 py-3 rounded-full text-xl md:text-base hover:bg-gray-800 transition">
        <span className="w-8 h-8 text-2xl flex items-center justify-center bg-white text-black rotate-315 rounded-full text-center">→</span>
        View winter experiences
      </button>
    </Link>
    </div>
    </>
  );
}
