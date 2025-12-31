
import rectangle256 from "../../assets/image_ofstar.jpg";

export const AboutM = ()=> {
  return (
  
    <section className="w-full min-h-screen bg-white px-4 py-8 sm:hidden">
      <div className="max-w-[360px] mx-auto">
        {/* ABOUT US label */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1 h-1 bg-black rounded-full" />
          <p className="text-[12px] tracking-widest text-gray-700 font-medium">
            ABOUT US
          </p>
        </div>
        {/* Logo Card */}
        <div className="w-full aspect-square rounded-2xl overflow-hidden mb-6 shadow-[0_12px_32px_rgba(0,0,0,0.25)]" style={{ backgroundImage: `url(${rectangle256})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="w-full h-full flex items-center justify-center ">
            <h1 className="text-white text-3xl font-extrabold tracking-wide">
              UNRAVEL
            </h1>
          </div>
        </div>
        {/* Main Text */}
        <p className="text-[14px] text-gray-900 leading-relaxed mb-4">
          Most travel companies sell the same thing like generic packages,
          endless follow-ups, tourist traps dressed up as experiences.
          <br />
          <br />
          We build journeys that feel <br />
          <span className="font-semibold">Personal. Experiential. Seamless.</span>
        </p>

        {/* Highlight Block */}
        <div className="relative pl-4 mb-4">
          <span className="absolute left-0 top-0 h-full w-[3px] bg-gray-900 rounded-full" />
          <p className="text-[13px] text-gray-700 leading-relaxed">
            Every trip is designed around how you want to feel, not just where
            you want to go. And everything from flights, stays, Experiences,
            transfers, visas is handled so you never have to think about the
            boring parts.
          </p>
        </div>

        {/* Footer Line */}
        <p className="text-[11px] text-gray-500 mb-4">
          You just show up. We've thought through the rest.
        </p>

        {/* CTA Button */}
        <button className="bg-black text-white text-[13px] px-5 py-2.5 rounded-full shadow-md active:scale-95 transition">
          More about us
        </button>
      </div>
    </section>
  );
}
