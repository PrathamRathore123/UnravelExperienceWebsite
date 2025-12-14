
import { Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
    <footer className="w-full md:flex  bg-white text-black py-14">
       {/* CONTACT */}
        <div className="p-4  rounded-t-2xl h-full  md:w-[50%] bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 border border-gray-100 md:bg-white space-y-4  ">
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
        
      <div className="flex justify-between pt-5 md:w-[50%] md:flex-row md:justify-around nd:gap-8 md:gap-0  md:px-0">
        {/* US */}
        <div className="hidden md:block px-4 space-y-4 w-full md:w-auto">
          <p className="text-[10px] tracking-widest">US</p>

          <div className="flex flex-col space-y-2 text-sm">
            <Link to="/about">Why we Exist</Link>
          </div>

          <p className=" text-[10px] tracking-widest pt-2">HELP</p>
          <div className="flex flex-col space-y-2 text-sm">
            <Link to="/contact">Talk To Us</Link>
            <Link to="/faq">FAQs</Link>
            <Link to="/terms">Fine Print</Link>
          </div>
        </div>

        {/* MULTILAYOUT */}
        <div className="px-4 space-y-4 w-full md:w-auto">
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
         <div className="px-4 space-y-4 w-full md:w-auto">
          <p className="text-[10px] tracking-widest">Pages</p>

          <div className="flex flex-col space-y-2 text-sm">
            <Link to="/about">About</Link>
            <Link to="/contact">Blog</Link>
            <Link to="/experiences">Blog Article</Link>
            <Link to="/signup">Case Study</Link>
          </div>
        </div>

        {/* GO */}
        <div  className="px-4 space-y-4 w-full md:w-auto">
          <p className="text-[10px] tracking-widest">GO</p>

          <div className="flex flex-col space-y-2 text-sm">
            <Link to="/experiences">Experiences</Link>
            <Link to="/unravel-one">Unravel One</Link>
            <Link to="/insider">Insider</Link>
          </div>

          {/* Social Icons */}
         
        </div>
      </div>

      {/* Bottom Text */}
     
    </footer>
     <div className=" px-4 flex items-center space-x-4 pt-4 mr-10 float-right">
            <Instagram size={16} />
            <Linkedin size={16} />
          </div>
     <p className="text-[10px] w-[100%] my-16 text-center ">
        © 2025 Unravel Experiences. For travelers who feel things.
      </p>
    </>
  );
};

