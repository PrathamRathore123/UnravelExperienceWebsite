import { Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronDown } from "lucide-react";



export const Footer = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
    <footer className="w-full md:flex md:justify-around    bg-white text-black py-10">

        <div className="  rounded-t-2xl p-4 md:p-0  h-full md:w-[40%] bg-gray-100  rounded-md bg-clip-padding  backdrop-blur-xl bg-opacity-20 border border-gray-100 md:border-none md:bg-white space-y-4  ">
          <div className=" flex items-center space-x-4 ">
           <a href="https://www.instagram.com/unravelexperiences/?utm_source=ig_web_button_share_sheet"> <Instagram size={16} /></a>
           <a href="https://www.linkedin.com/company/unravel-experiences/"><Linkedin size={16} /></a>
          </div><p className="text-[10px] tracking-widest">CONTACT</p>
          <p className="text-sm leading-relaxed">
         No.43, Wework Galaxy <br />
Residency Road, Bangalore 560025
          </p>
          <p className="text-sm leading-relaxed">
            <a href="">Email Me</a>

            <a href="mailto:travel@unravelexperience.com">travel@unravelexperiences.com</a> <br />
            <span className="text-xs">
             Planning a trip or just curious? Drop us a line anytime
            </span>
          </p>
        </div>
      
        <div className="flex flex-col md:flex-row justify-center px-5 gap-5 md:gap-10 p-2 md:p-0 md:w-[40%]">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/experiences">Experiences</Link>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="hover:underline focus:outline-none flex items-center"
              >
              Policies<ChevronDown className="h-6 w-6 " />
              </button>
              {isDropdownOpen && (
                <div className="absolute top-[-140px] md:top-5 w-30  md:mt-2 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                  <Link
                    to="/privacy-policy"
                    className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    to="/terms-of-service"
                    className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Terms & conditions
                  </Link>
                   <Link
                    to="/cancellations"
                    className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                   Cancellations
                  </Link>
                </div>
              )}
            </div>
          </div >

      {/* Bottom Text */}

    </footer>

     <p className="text-[10px] w-[100%] my-2 text-center ">
        © 2025 Unravel Experiences. For travelers who feel things.
      </p>
    </>
  );
};
