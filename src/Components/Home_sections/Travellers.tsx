
import image from "../../assets/pexels-steve-13129479.jpg"
import Logo from "../../assets/EXPERIENCES.png"
export const Travellers=()=> {
  return (
    <>
    <section
      className="relative w-full h-[60vh]  flex items-center justify-center text-white">
      <img className="absolute w-[100%] h-[100%]  " src={image} alt="" />

      
      <div className="relative z-10 text-center max-w-3xl px-4">
        <h1 className="text-2xl md:text-3xl font-semibold leading-snug">
          Unravel Experiences
        </h1>
        <p className="text-2xl md:text-3xl font-semibold leading-snug">
          For travellers who feel things.
        </p>

        <p className="mt-6 text-sm opacity-80">Don't miss the next one</p>

       
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mt-6">
          <button
            className="px-6 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200 transition"
          >
            Explore Winter Experiences
          </button>

          <button
            className="px-6 py-2 border border-white text-white rounded-full text-sm font-medium hover:bg-white/10 transition"
          >
            Talk To Unravel One
          </button>
        </div>
      </div>
    </section>
    <img className="p-5 py-3 w-[50%]" src={Logo} alt="" />
    </>
  );
}
