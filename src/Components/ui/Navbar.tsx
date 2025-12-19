import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {UserRound} from "lucide-react"
import  Image  from "../../assets/UnravelLogo.png";
import  image from '../../assets/HeroSectionIMage.jpg'
export const Navbar = () => {
 
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  
  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
   
      <header className="w-full flex justify-center py-4  ">
      {/* NAVBAR WRAPPER */}
      <nav className={`relative flex items-center justify-between
        bg-black text-white px-2 py-1
        rounded-full shadow-xl
        w-[300px]
        md:w-[600px] 
text-base
      `}>

        {/* LOGO */}
        <Link
          to="/"
          className="bg-white text-black font-bold px-4 py-2 rounded-full"
        >
         <img className="w-20" src={Image} alt="" />
        </Link>

        {/* DESKTOP MENU */}
        <ul className="flex items-center gap-8 text-xs ">
          <li className="hidden md:block hover:opacity-100"><Link to="/">Home</Link></li>
          <li className="hidden md:block hover:opacity-100"><Link to="/about">About</Link></li>
          <li className="hidden md:block hover:opacity-100">
            <Link to="/experiences" className="hidden md:block flex items-center gap-1">
              Experiences
              <sup className="bg-gray-900 text-white rounded-full px-2 py-[2px] text-[10px]">5</sup>
            </Link>
          </li>
          <li className="hidden md:block hover:opacity-100"><Link to="/contact">Contact</Link></li>
      

        {/* HAMBURGER + DROPDOWN ANCHOR */}
        <div className="relative block" ref={dropdownRef}>
          <button
            onClick={() => setOpen(!open)}
            className={`p-3 md:p-4 rounded-full transition
              ${open ? "bg-white" : "bg-black"}
            `}
          >
            <div className={`w-5 md:w-6 h-[2px] mb-1
              ${open ? "bg-black" : "bg-white"}
            `}></div>
            <div className={`w-5 md:w-6 h-[2px]
              ${open ? "bg-black" : "bg-white"}
            `}></div>
          </button>
 
          {/* DROPDOWN */}
            {open && <NavbarDropdown />}
        </div>
         </ul>
      </nav>
    
    </header>
   

  );
};

export default Navbar;

/* ================= DROPDOWN ================= */

const NavbarDropdown = () => {
  return (
    <div
      className="
        absolute
        -right-9
        md:-right-9
        mt-2
        z-50
        w-[45vw]
        max-w-[420px]
      "
    >
      {/* CUTOUT / NOTCH */}
      <div className="absolute -top-15 right-0 w-14 h-19 md:h-20 bg-black rounded-t md:[-webkit-mask-image:radial-gradient(circle_32px_at_left_32px_,transparent_99%,black_100%)] [-webkit-mask-image:radial-gradient(circle_40px_at_left_35px_,transparent_99%,black_100%)] " />

      {/* DROPDOWN CARD */}
      <div className="md:w-full
      w-[100% ]
        bg-black text-white
        rounded-4xl rounded-tr-none shadow-2xl
        mt-1
        p-6
      ">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="hidden md:block">
           
            <h4 className=" text-gray-400 text-sm mb-2">
              WE ARE UNRAVEL
            </h4>
            <p className=" text-lg md:text-2xl leading-tight max-w-[260px]">
              The trips your friends will ask you about.
            </p>
          </div>

          <Link to="/login">
            <button className=" flex gap-1
              bg-white text-black float-right
              font-bold
              px-6 py-2 rounded-full
              hover:bg-gray-200 transition
              whitespace-nowrap
            ">
             <UserRound className="text-sm" /> Login
            </button>
          </Link>
        </div>

        {/* MOBILE LINKS */}
        <div className="md:hidden mt-6 flex flex-col gap-1 text-xl">
          <Link to="/" className=" ">Home</Link>
          <Link to="/about" className="">About</Link>
          <Link to="/experiences" className=" ">Experiences</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <p className="text-center sm:px-14 my-4 ">No junk Trips. Just well-composed Strategic plan ready to experience whatever you need to feel.</p>
         <div style={{backgroundImage:`url(${image})`}} className="overflow-hidden w-full h-25 rounded-lg bg-center bg-cover">
          <h1 className="text-base p-2">HI Champ</h1>
          <p className="p-2 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, accusamus. 
            Aliquam, dolore laudantium.</p>
         </div>
      </div>
    </div>
  );
};
