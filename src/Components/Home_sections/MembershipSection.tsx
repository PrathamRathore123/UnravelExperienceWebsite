import {Link} from "react-router-dom";
import Video from "../../assets/10994873-hd_1080_1920_25fps.mp4";
export const MembershipSection = () => {
  return (
    <div className="relative w-full h-[420px] md:h-[500px] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <video autoPlay loop muted
        src={Video} 
        className="absolute top-0 left-0 w-full h-full object-cover opacity-90"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-3xl">
        <p className="text-[10px] md:text-base tracking-wide mb-4">
          A digital membership for travel in the new world.
        </p>

        <h2 className="text-2xl md:text-4xl font-light leading-snug mb-6">
          Just first looks, inside access, and thoughtful<br />
          perks that grow with you
        </h2>

        <p className="text-[12px] md:text-base text-gray-200 mb-8">
          Complimentary upgrades • Premium transfers • Airport fit check • First access •
          Green Impact in your name
        </p>

        <Link to="/signup"><button className="px-6 py-3 bg-white text-black rounded-full text-sm md:text-base font-medium shadow-md hover:bg-gray-200 transition">
         Join Unravel Access
        </button></Link>
      </div>
    </div>
  );
};
