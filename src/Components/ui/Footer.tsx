
import { Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="w-full bg-white text-black py-14">
      <div className="flex flex-col md:flex-row justify-around gap-8 md:gap-0 px-4 md:px-0">

        {/* CONTACT */}
        <div className="space-y-4 w-full md:w-auto">
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
        <div className="space-y-4 w-full md:w-auto">
          <p className="text-[10px] tracking-widest">US</p>

          <div className="flex flex-col space-y-2 text-sm">
            <Link to="/about">Why we Exist</Link>
          </div>

          <p className="text-[10px] tracking-widest pt-2">HELP</p>
          <div className="flex flex-col space-y-2 text-sm">
            <Link to="/contact">Talk To Us</Link>
            <Link to="/faq">FAQs</Link>
            <Link to="/terms">Fine Print</Link>
          </div>
        </div>

        {/* MULTILAYOUT */}
        <div className="space-y-4 w-full md:w-auto">
          <p className="text-[10px] tracking-widest">MULTILAYOUT</p>

          <div className="flex flex-col space-y-2 text-sm">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/experiences">Experiences</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Sign In</Link>
          </div>
        </div>

        {/* GO */}
        <div className="space-y-4 w-full md:w-auto">
          <p className="text-[10px] tracking-widest">GO</p>

          <div className="flex flex-col space-y-2 text-sm">
            <Link to="/experiences">Experiences</Link>
            <Link to="/unravel-one">Unravel One</Link>
            <Link to="/insider">Insider</Link>
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

