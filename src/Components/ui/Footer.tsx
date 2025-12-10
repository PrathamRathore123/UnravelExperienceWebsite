
import { Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full bg-white text-black py-14">
      <div className="flex justify-around ">

        {/* CONTACT */}
        <div className="space-y-4 w-[30%]">
          <p className="text-[10px] tracking-widest">CONTACT</p>

          <p className="text-sm leading-relaxed">
            112 los streets, CA lorem <br />
            sispasid ispup Ionsiam
          </p>

          <p className="text-sm leading-relaxed">
            +00 123 456 789 <br />
            <span className="text-xs">(Press 0 to talk to yourself)</span>
          </p>

          <p className="text-sm leading-relaxed">
            hello@unravelexperiences.com <br />
            <span className="text-xs">
              This inbox doesn't exist — but yours will.
            </span>
          </p>
        </div>

        {/* US */}
        <div className="space-y-4 ">
          <p className="text-[10px] tracking-widest">US</p>

          <div className="flex flex-col space-y-2 text-sm">
            <a href="#">Why we Exist</a>
          </div>

          <p className="text-[10px] tracking-widest pt-2">HELP</p>
          <div className="flex flex-col space-y-2 text-sm">
            <a href="#">Talk To Us</a>
            <a href="#">FAQs</a>
            <a href="#">Fine Print</a>
          </div>
        </div>

        {/* MULTILAYOUT */}
        <div className="space-y-4 ">
          <p className="text-[10px] tracking-widest">MULTILAYOUT</p>

          <div className="flex flex-col space-y-2 text-sm">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Experiences</a>
            <a href="#">Sign Up</a>
            <a href="#">Sign In</a>
          </div>
        </div>

        {/* GO */}
        <div className="space-y-4 ">
          <p className="text-[10px] tracking-widest">GO</p>

          <div className="flex flex-col space-y-2 text-sm">
            <a href="#">Experiences</a>
            <a href="#">Unravel One</a>
            <a href="#">Insider</a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-4 pt-4">
            <Instagram size={16} />
            <Linkedin size={16} />
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <p className="text-[10px] m-16 ">
        © 2025 Unravel Experiences. For travelers who feel things.
      </p>
    </footer>
  );
};

