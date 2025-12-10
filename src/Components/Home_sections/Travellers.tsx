
import image from "../../assets/WhatsApp.jpg"

export const Travellers=()=> {
  return (
    <section
      className="relative w-full h-[80vh]   flex items-center justify-center text-white">
      <img className="absolute w-[100%] bg" src={image} alt="" />
    
      {/* CONTENT */}
      <div className="relative z-10 text-center max-w-3xl px-4">
        <h1 className="text-4xl md:text-5xl font-semibold leading-snug">
          Unravel Experiences
        </h1>
        <p className="text-xl md:text-2xl mt-2 font-light">
          For travellers who feel things.
        </p>

        <p className="mt-6 text-sm opacity-80">Don't miss the next one</p>

        {/* BUTTONS */}
        <div className="flex items-center justify-center gap-4 mt-6">
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
  );
}
