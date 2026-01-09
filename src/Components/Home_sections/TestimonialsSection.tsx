import image from "../../assets/pexels-tima-miroshnichenko-5717640.jpg";

export const TestimonialsSection = () => {
  return (
    <div className="w-full flex flex-col items-center bg-white text-black py-16 px-4 md:px-20 lg:px-32">
      <h1 className=" text-xl md:text-3xl md:text-4xl font-bold text-center mb-2">What Our Travelers Say</h1>
      <p className="text-lg text-gray-600 mb-12">More stories from the road</p>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Card */}
        <div className="relative  h-[500px] w-[100%] md:h-[550px] rounded-xl overflow-hidden shadow-sm">
          <img
            src={image}
            alt="Traveler"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0  flex items-end bg-linear-to-t from-black/50 via-20% via-white/0  to-black/30   text-white">
            <div  className='backdrop-blur-lg   p-3 w-full h-[60%] flex flex-col justify-center md:p-15 '> 
            <p className="text-md font-semibold mb-3 backdrop-blur-md">★★★★★</p>
            <p className="  text-md font-semibold  leading-relaxed backdrop-blur-md">
              "I had asked for a regular airport transfer, nothing fancy, but when we landed,
              there was an S-Class waiting for us. Unravel had upgraded our ride as a
              surprise, just like that, No extra charge. It was such a nice touch."
            </p>
         
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-15">
          {/* Card 1 */}
          <div className="p-5 bg-gray-100 rounded-xl shadow-sm">
            <p className="text-xl font-semibold mb-3">★★★★★</p>
            <p className="md:text-md  text-sm font-semibold text-black leading-relaxed">
              “They nailed our Europe trip. It didn't feel mass market. Every little detail
              down to restaurant bookings and train timings was handled like a concierge
              service”
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-5 bg-gray-100 rounded-xl shadow-sm">
            <p className="text-xl font-semibold mb-3">★★★★★</p>
            <p className="md:text-md  text-sm font-semibold text-black leading-relaxed">
              “The best part about booking with Unravel is every experience was intimate,
              well thought out, and seamless”
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-5 bg-gray-100 rounded-xl shadow-sm">
            <p className="text-xl font-semibold mb-3">★★★★★</p>
            <p className="md:text-md  text-sm font-semibold text-black leading-relaxed">
              “We did a 10-day Italy trip with Unravel and it was really smooth. The hotels
              were super cute and affordable, and they somehow got us into places we didn't
              even know existed.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
