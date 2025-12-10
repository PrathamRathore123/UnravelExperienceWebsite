

export default function HeroSection() {
  return (
    <section className="w-full h-[80vh] rounded-b-3xl bg-[url('/hero-bg.jpg')] bg-cover bg-center flex flex-col items-center justify-center text-white text-center px-6 relative">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-b-3xl"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-3">
        <h1 className="text-3xl md:text-4xl font-semibold">Unravel Experiences</h1>
        <h2 className="text-lg md:text-2xl font-light">For travellers who feel things.</h2>

        <p className="text-xs md:text-sm mt-4 opacity-80">Don't miss the next one</p>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <button className="px-6 py-2 rounded-full bg-white text-black text-sm shadow hover:bg-gray-200 transition">
            Explore Winter Experiences
          </button>

          <button className="px-6 py-2 rounded-full border border-white text-white text-sm hover:bg-white hover:text-black transition">
            Talk To Unravel One
          </button>
        </div>
      </div>
    </section>
  );
}
