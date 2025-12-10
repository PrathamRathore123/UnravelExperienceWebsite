import React from "react";
import first from "../../assets/1.png";
import second from "../../assets/2.png";
import third from "../../assets/3.png";
import fourth from "../../assets/4.png";
import fifth from "../../assets/5.png";

const cards = [
  {
    title: "Add-Ons",
    subtitle: "One perfect moment. Added to your trip.",
    img:first,
  },
  {
    title: "Originals",
    subtitle: "Private villas. Private chefs. Zero plans needed.",
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
  return (
    <div className="w-full px-6 md:px-20 lg:px-32 py-20 text-black">

      {/* Coming Soon + Heading */}
      <div className="flex flex-col md:flex-row md:items-start justify-between mb-16 gap-8">
        <p className="text-sm tracking-widest text-gray-600 mt-2">• COMING SOON</p>

        <h2 className="text-3xl md:text-4xl font-light leading-snug max-w-2xl">
          We're designing fresh travel styles for the romantics.<br />
          The restless. The "let's just go" people.
          <span className="text-gray-400"> Be the first to know when they drop.</span>
        </h2>
      </div>

      {/* Section Title */}
      <h3 className="text-xl font-medium mb-10">New ways to wander</h3>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        {cards.map((card, index) => (
          <div key={index} className="flex flex-col items-center text-center cursor-pointer group">
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
    </div>
  );
}
