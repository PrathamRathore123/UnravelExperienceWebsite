
import  Starry from "../../assets/rectangle-256.png"

export const AboutSection = () => {
  return (
    <div  className="w-full flex flex-col md:flex-row items-center justify-center gap-12 py-20 px-6 md:px-20">
      
      <div className="w-100 h-100 rounded-2xl overflow-hidden shadow-md">
        <img
          src={Starry} 
          
          className="w-full h-full object-cover"
        />
      </div>

   
      <div className="w-full md:w-1/2 flex flex-col gap-6 text-left">
        <p className="text-xs tracking-widest text-gray-600">• ABOUT US</p>

        <h2 className="text-xl md:text-2xl leading-relaxed text-black">
          Most travel companies sell the same
          thing like generic packages, endless
          follow-ups, tourist traps dressed up
          as experiences.
        </h2>

        <h2 className="text-xl md:text-2xl font-semibold text-black leading-relaxed">
          We build journeys that feel
        </h2>

        <p className="italic text-gray-700 text-lg">
          Personal. Experiential. Seamless.
        </p>

        <p className="text-xs text-gray-500 mt-4">
          You just show up. We’ve thought through the rest.
        </p>

        <button className="mt-2 bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800 w-fit">
          More about us
        </button>
      </div>
    </div>
  );
}