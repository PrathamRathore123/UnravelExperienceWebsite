
import { useRef,useState,useEffect } from "react";
import first from "../../assets/1.png";
import second from "../../assets/2.png";
import third from "../../assets/3.png";
import fourth from "../../assets/4.png";
import fifth from "../../assets/5.png";
import ScrollAnimation from "../ui/ScrollAnimation";

const cards = [
  {
    title: "Add-Ons",
    subtitle: "One perfect moment. Added to your trip.",
    img:first,
  },
  {
    title: "Originals",
    subtitle: "Our version of slow living",
    img: second,
  },
  {
    title: "Reserves",
    subtitle: "The kind of luxury most people don’t know exists.",
    img: third,
  },
  {
    title: "Sports Mode",
    subtitle: "Courtside. Trackside. Inside.",
    img: fourth,
  },
  {
    title: "Black Book",
    subtitle: "Access you didn’t know existed.",
    img: fifth,
  },
];

export const NewWaysToWander = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  useEffect(() => {
    if (sliderRef.current) {
      const cardWidth = 272; 
      sliderRef.current.scrollTo({
        left: currentIndex * cardWidth,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  return (
    <div className="w-full px-6 md:px-20 lg:px-32 py-20 text-black">
   
      <div className="flex flex-col md:flex-row md:items-start justify-between mb-16 gap-8">
        <p className="text-sm tracking-widest text-black font-bold  mt-2">• COMING SOON</p>
       <ScrollAnimation>
         <h2 className="text-xl  md:text-2xl font-semibold leading-snug max-w-2xl">
          We're designing fresh travel styles for the romantics. <br />
          The restless. The "let's just go" people. <br />
           Be the first to know when they drop. <br />
        </h2></ScrollAnimation>
      </div>
     
      <h3 className="text-xl font-medium mb-10">New ways to wander</h3>
   
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 md:gap-10 hidden md:block">
        {cards.map((card, index) => (
          <div key={index} className="flex flex-col items-center text-center cursor-pointer group">
            <div className="w-full h-38 rounded-xl overflow-hidden shadow-md relative">
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <p className="text-sm text-gray-600 mt-3 max-w-[150px]">{card.subtitle}</p>
          </div>
        ))}
      </div>
     
      <div className="md:hidden relative">
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 shadow-md z-10"
        >
          ‹
        </button>
        <div
          ref={sliderRef}
          className="flex gap-4 overflow-x-hidden scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {cards.map((card, index) => (
            <div key={index} className="flex-shrink-0 w-64 flex flex-col items-center text-center cursor-pointer group">
              <div className="w-full h-48 rounded-xl overflow-hidden shadow-md relative">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-sm text-gray-600 mt-3 max-w-[150px]">{card.subtitle}</p>
            </div>
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 shadow-md z-10"
        >
          ›
        </button>
      </div>
    </div>
  );
}
