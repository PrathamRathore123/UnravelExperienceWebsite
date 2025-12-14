
import { useState } from 'react';
import { Link } from 'react-router-dom';


export const NavbarOne = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="sticky top-0 z-50 w-full flex justify-center py-4 bg-transparent">
      <nav
        className="
          bg-black text-white px-4 md:px-8 py-3
          rounded-full shadow-xl
          flex items-center justify-between md:gap-10
          transition-all duration-300
          w-full max-w-4xl
        "
      >
        {/* Logo */}
        <Link to="/" className="bg-white text-black font-bold px-4 md:px-5 py-2 rounded-full text-sm md:text-base">
          UNRAVEL
        </Link>

        {/* Nav Items - Hidden on mobile */}
        <ul className="hidden md:flex items-center gap-4 md:gap-8 text-sm opacity-80">
          <li className="hover:opacity-100 cursor-pointer"><Link to="/">Home</Link></li>
          <li className="hover:opacity-100 cursor-pointer"><Link to="/about">About</Link></li>
          <li className="hover:opacity-100 cursor-pointer"><Link to="/experiences">Experiences</Link></li>
          <li className="hover:opacity-100 cursor-pointer"><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Hamburger - Always visible */}
        <div  onClick={() => { setOpen(!open)  }} className={`cursor-pointer p-3 md:p-5 rounded-full  ${open ? "bg-white" : "bg-black"}`}>
          <div className={`w-5 md:w-6 h-[2px]  mb-[4px] md:mb-[6px]  ${open ? "bg-black" : "bg-white"}`}></div>
          <div className={`w-5 md:w-6 h-[2px]   ${open ? "bg-black" : "bg-white"}`}></div>
        </div>
      </nav>
      {open && (
        <div id="profileCard" className=" z-[999] absolute bg-black min-h-[300px] w-[90%] max-w-[450px] top-20 left-[50%] translate-x-[-50%] text-white rounded-lg shadow-lg">

          <div className='p-4 md:p-6'>
            <div className='hidden md:block absolute right-[0px] top-[-78px] h-[100px] w-[50px] bg-black rounded-s [-webkit-mask-image:radial-gradient(circle_42px_at_left_35px_,transparent_99%,black_100%)]'></div>
            <div className='flex flex-col md:flex-row justify-between items-start gap-4'>
              <div>
                <h3 className="text-gray-400 text-sm md:text-base mb-2">WE ARE UNRAVEL</h3>
                <p className="mb-4 text-xl md:text-3xl w-full md:w-[60%]">The trips your friends will ask you about.</p>
              </div>
              <Link to={'/login'}><button className="bg-white text-gray-900 px-5 md:px-7 py-2 rounded-full hover:bg-gray-200 transition text-sm md:text-base">Login</button></Link>
            </div>
            <div className='md:hidden mt-4 flex flex-col gap-3 text-sm'>
              <Link to="/" className="hover:opacity-70" onClick={() => setOpen(false)}>Home</Link>
              <Link to="/about" className="hover:opacity-70" onClick={() => setOpen(false)}>About</Link>
              <Link to="/experiences" className="hover:opacity-70" onClick={() => setOpen(false)}>Experiences</Link>
              <Link to="/contact" className="hover:opacity-70" onClick={() => setOpen(false)}>Contact</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const Navbartwo = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="w-full absolute z-[10] flex justify-center py-8 px-4">
        <div className="
        flex items-center justify-between px-6 py-3
        border border-[#e5e5e5]
        rounded-full shadow-sm bg-white
        max-w-[800px] w-[80%] md:w-[80%] lg:w-[60%]
      ">

          {/* Logo Capsule */}
          <div className="
          bg-black text-white px-4 md:px-5 py-2 rounded-full
          flex items-center justify-center font-bold
          tracking-wider text-[12px] md:text-[14px]
        ">
            UNRAVEL
          </div>
          {/* Menu Items */}
          <div className="hidden md:flex items-center gap-4 lg:gap-10 text-[13px] lg:text-[15px] text-[#222]">
            <Link to="/" className="hover:opacity-70">Home</Link>
            <Link to="/about" className="hover:opacity-70">About</Link>

            {/* Experiences with dot */}
            <Link to="/experiences" className="flex items-center gap-1 hover:opacity-70">
              Experiences
          <sup className='bg-black text-white p-2 lg:p-3 rounded-full text-[10px]'>5</sup>
           </Link>

            <Link to="/contact" className="hover:opacity-70">Contact</Link>
          </div>
            {/* Right Menu Icon */}
            <div  onClick={() => { setOpen(!open)  }} className={`cursor-pointer p-3 md:p-5 rounded-full  ${open ? "bg-black" : "bg-white"}`}>
          <div className={`w-5 md:w-6 h-[2px]  mb-[5px] md:mb-[6px]  ${open ? "bg-white" : "bg-black"}`}></div>
          <div className={`w-5 md:w-6 h-[2px]   ${open ? "bg-white" : "bg-black"}`}></div>
        </div>
        </div>
      </nav>
      {open && (
      <div id="profileCard" className="absolute z-[999] bg-black min-h-[250px] w-[90%] max-w-[450px] top-26 left-1/2 transform -translate-x-1/2 md:left-auto md:right-35 md:top-29 md:transform-none text-white rounded-lg shadow-lg">
        <div className='p-6 md:p-6'>
          <div className='hidden md:block absolute right-[0px] top-[-78px] h-[100px] w-[50px] bg-black rounded-s [-webkit-mask-image:radial-gradient(circle_42px_at_left_35px_,transparent_99%,black_100%)]'></div>
          <div className='flex flex-col md:flex-row justify-between items-start gap-6 md:gap-4'>
            <div className='flex-1'>
              <h3 className="text-gray-400 text-sm md:text-base mb-3 md:mb-2">WE ARE UNRAVEL</h3>
              <p className="mb-6 md:mb-4 text-lg md:text-3xl w-full md:w-[60%] leading-tight">The trips your friends will ask you about.</p>
            </div>
            <Link to={'/login'}><button className="bg-white text-gray-900 px-6 md:px-7 py-3 md:py-2 rounded-full hover:bg-gray-200 transition text-sm md:text-base font-medium whitespace-nowrap">Login</button></Link>
          </div>
          <div className='md:hidden mt-6 flex flex-col gap-4 text-base'>
            <Link to="/" className="hover:opacity-70 py-2 border-b border-gray-700" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/about" className="hover:opacity-70 py-2 border-b border-gray-700" onClick={() => setOpen(false)}>About</Link>
            <Link to="/experiences" className="hover:opacity-70 py-2 border-b border-gray-700" onClick={() => setOpen(false)}>Experiences</Link>
            <Link to="/contact" className="hover:opacity-70 py-2" onClick={() => setOpen(false)}>Contact</Link>
          </div>
        </div>
      </div>
       )}
    </>

  );
};

