import { Link } from "react-router-dom";
import { Badge } from "../ui/badge";

const navItems = [
  { label: "Home", to: "#" },
  { label: "About", to: "/about" },
  { label: "Experiences", to: "/experiences", badge: "3" },
  { label: "Contact", to: "/contact" },
  { label: "Login", to: "/login" },
];

export const Header = () => {
  return (
    <header className=" translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
      <nav className="flex items-center justify-between px-8 py-6 bg-white">
        <div className="flex items-center gap-7">
          <div className="w-28 h-5.5 bg-[url(https://c.animaapp.com/min3uh9qPFGdoq/img/untitled-design-7-removebg-preview-png.png)] bg-cover bg-center" />
          <div className="flex items-center gap-3">
            <div className="flex flex-col w-14 items-center justify-center overflow-hidden">
              <img className="w-14 h-[26.31px]" alt="Component" src="https://c.animaapp.com/min3uh9qPFGdoq/img/component-1.svg" />
            </div>
            <div className="[font-family:'BDO_Grotesk-Bold',Helvetica] font-bold text-black text-xs tracking-[-0.32px] leading-[16.8px]">
              JOURNEY ATELIER
            </div>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-8">
            {navItems.map((item, index) => (
              <Link key={index} to={item.to} className="flex items-center gap-1 [font-family:'BDO_Grotesk-DemiBold',Helvetica] font-bold text-black text-base tracking-[-0.32px] leading-[22.4px] hover:text-gray-600 transition-colors">
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
      </nav>
    </header>
  );
};
