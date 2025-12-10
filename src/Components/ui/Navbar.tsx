
import { useState } from 'react';
import { Link } from 'react-router-dom';


export const NavbarOne = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="sticky top-0 z-50 w-full flex justify-center py-4 bg-transparent">
      <nav
        className="
          bg-black text-white px-8 py-3 
          rounded-full shadow-xl 
          flex items-center gap-10
          transition-all duration-300
        "
      >
        {/* Logo */}
        <Link to="/" className="bg-white text-black font-bold px-5 py-2 rounded-full">
          UNRAVEL
        </Link>

        {/* Nav Items */}
        <ul className="flex items-center gap-8 text-sm opacity-80">
          <li className="hover:opacity-100 cursor-pointer"><Link to="/">Home</Link></li>
          <li className="hover:opacity-100 cursor-pointer"><Link to="/about">About</Link></li>
          <li className="hover:opacity-100 cursor-pointer"><Link to="/experiences">Experiences</Link></li>
          <li className="hover:opacity-100 cursor-pointer"><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Hamburger */}
        <div  onClick={() => { setOpen(!open)  }} className={`ml-6 cursor-pointer p-5 rounded-full  ${open ? "bg-white" : "bg-black"}`}>
          <div className={`w-6 h-[2px]  mb-[6px]  ${open ? "bg-black" : "bg-white"}`}></div>
          <div className={`w-6 h-[2px]   ${open ? "bg-black" : "bg-white"}`}></div>
        </div>
      </nav>
      {open && (
        <div id="profileCard" className=" z-[999] absolute bg-black h-[300px] w-[450px] top-23 left-[49%] translate-x-[-23%]  text-white  rounded-lg shadow-lg ">

          <div className='p-4 '>
            <div className='  absolute left-[400px] top-[-75px] h-[80px] w-[50px] bg-black rounded-s   
    [-webkit-mask-image:radial-gradient(circle_40px_at_left_35px_,transparent_99%,black_100%)]
  '></div>
            <div className='flex justify-between items-start'>
              <div>
                <h3 className="text-gray-400  mb-2">WE ARE UNRAVEL</h3>
                <p className="mb-4 text-3xl w-[60%]">The trips your friends will ask you about.</p>
              </div>  <Link to={'/login'}><button className="bg-white text-gray-900 px-7 py-2 rounded-full hover:bg-gray-200 transition">Login</button></Link>
            </div>
            <img src="" alt="" />
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
      <nav className="w-full absolute z-[10] flex justify-center py-8">
        <div className="
        flex items-center justify-around   py-3
        border border-[#e5e5e5]
        rounded-full shadow-sm bg-white
        max-w-[800px] w-[45%]
      ">

          {/* Logo Capsule */}
          <div className="
          bg-black text-white px-5 py-2 rounded-full
          flex items-center justify-center font-bold
          tracking-wider text-[14px]
        ">
            UNRAVEL
          </div>
          {/* Menu Items */}
          <div className="flex items-center gap-10 text-[15px] text-[#222]">
            <Link to="/" className="hover:opacity-70">Home</Link>
            <Link to="/about" className="hover:opacity-70">About</Link>

            {/* Experiences with dot */}
            <Link to="/experiences" className="flex items-center gap-1 hover:opacity-70">
              Experiences
          <sup className='bg-black text-white p-3 rounded-full'>5</sup>
           </Link>

            <Link to="/contact" className="hover:opacity-70">Contact</Link>
            {/* Right Menu Icon */}
            <div  onClick={() => { setOpen(!open)  }} className={`ml-6 cursor-pointer p-5 rounded-full  ${open ? "bg-black" : "bg-white"}`}>
          <div className={`w-6 h-[2px]  mb-[6px]  ${open ? "bg-white" : "bg-black"}`}></div>
          <div className={`w-6 h-[2px]   ${open ? "bg-white" : "bg-black"}`}></div>
        </div>
          </div>
        </div>
      </nav>
      {open && (
      <div id="profileCard" className=" absolute z-[999] bg-black h-[300px] w-[450px] top-29 left-[48%] translate-x-[-10%]  text-white  rounded-lg shadow-lg ">
        <div className='p-4 '>
          <div className='absolute left-[400px] top-[-78px] h-[90px] w-[50px] bg-black rounded-s   
    [-webkit-mask-image:radial-gradient(circle_42px_at_left_35px_,transparent_99%,black_100%)]
  '></div>
          <div className='flex justify-between items-start'>
            <div>
              <h3 className="text-gray-400  mb-2">WE ARE UNRAVEL</h3>
              <p className="mb-4 text-3xl w-[60%]">The trips your friends will ask you about.</p>
            </div> 
            <Link to={'/login'}><button  className="bg-white text-gray-900 px-7 py-2 rounded-full hover:bg-gray-200 transition">Login</button></Link>
          </div>
          <img src="" alt="" />
        </div>
      </div>
       )}
    </>

  );
};

