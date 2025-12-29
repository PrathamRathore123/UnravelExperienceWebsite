import { useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "../ui/badge";
import logo from '../../assets/EXPERIENCES.png'
const navItems = [
  { label: "Home", to: "#" },
  { label: "About", to: "/about" },
  { label: "Experiences", to: "/experiences", badge: "4" },
  { label: "Contact", to: "/contact" },
  { label: "Login", to: "/login" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
      <nav className="flex items-center justify-between px-4 sm:px-8 py-4 sm:py-6 bg-white relative">
        <div className="flex items-center gap-4 sm:gap-7">
          <div style={{backgroundImage:`url(${logo})`}} className="w-20 sm:w-35 h-4 sm:h-7.5 bg-cover bg-center" />
          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3">
            <div className="flex flex-col w-10 sm:w-14 items-center justify-center overflow-hidden">
              <img className="w-10 sm:w-14 h-[18.62px] sm:h-[26.31px]" alt="Component" src="https://c.animaapp.com/min3uh9qPFGdoq/img/component-1.svg" />
            </div>
            <div className="[font-family:'BDO_Grotesk-Bold',Helvetica] font-bold text-black text-xs sm:text-sm tracking-[-0.32px] leading-[16.8px] sm:leading-[18.9px]">
              JOURNEY ATELIER
            </div>
          </div>
        </div>
        <div className="flex items-center gap-5">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <Link key={index} to={item.to} className="flex items-center gap-1 [font-family:'BDO_Grotesk-DemiBold',Helvetica] font-bold text-black text-sm sm:text-base tracking-[-0.32px] leading-[19.6px] sm:leading-[22.4px] hover:text-gray-600 transition-colors">
                {item.label}
                {item.badge && (
                  <Badge className="h-4 w-4 flex items-center justify-center bg-black text-white text-xs rounded-lg p-0">
                    {item.badge}
                  </Badge>
                )}
              </Link>
            ))}
          </div>
          {/* Mobile Hamburger Menu */}
          <button
            className="md:hidden flex flex-col items-center justify-center w-8 h-8 bg-transparent border-none cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
            <span className={`block w-6 h-0.5 bg-black transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
          </button>
        </div>
        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50">
            <div className="flex flex-col items-center gap-4 py-4">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.to}
                  className="flex items-center gap-1 [font-family:'BDO_Grotesk-DemiBold',Helvetica] font-bold text-black text-sm tracking-[-0.32px] leading-[19.6px] hover:text-gray-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                  {item.badge && (
                    <Badge className="h-4 w-4 flex items-center justify-center bg-black text-white text-xs rounded-lg p-0">
                      {item.badge}
                    </Badge>
                  )}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
