import React from "react";

type Benefit = {
  title: string;
  description: string;
  image: string;
  highlight?: boolean;
};

const benefits: Benefit[] = [
  {
    title: "Complimentary Upgrades",
    description: "Room, Car. The Best Surprises Happen Without Asking.",
    image: "/images/upgrade.png",
  },
  {
    title: "Hometown To Airport, On Us",
    description: "Room, Car. The Best Surprises Happen Without Asking.",
    image: "/images/car.png",
  },
  {
    title: "Airport Fit Check",
    description: "Start Your Trip Looking Good. Our Partner Brand Makes Sure Of It.",
    image: "/images/bag.png",
  },
  {
    title: "Green Impact In Your Name",
    description: "Room, Car. The Best Surprises Happen Without Asking.",
    image: "/images/tree.png",
    highlight: true,
  },
];

export const ItenaryCard: React.FC = () => {
  return (
    <section className=" bg-gray-100 flex items-center justify-center rounded-3xl px-4 py-3 mt-5">
      <div className="max-w-md w-full    overflow-hidden">
        
        {/* Header */}
        <div className="text-center py-1">
          <h2 className="text-3xl font-semibold text-gray-900">
             Insider
          </h2>
          <p className="text-md text-black">Perks unlocked when you book this experience</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-1  gap-2 px-3  ">
          {benefits.map((item, index) => (
            <div
              key={index}
              className=" md:h-[70px] bg-white border rounded-2xl p-4 flex flex-col md:flex-row items-center text-center md:text-left shadow-sm"
            >
              <img
                src={item.image}
                
                className="h-6 w-[40%] mb-3 md:mb-0 object-contain"
              />
              <div>
              <h3
                className={`text-xs font-semibold ${
                  item.highlight ? "text-green-600" : "text-gray-900"
                }`}
              >
                {item.title}
              </h3>

              <p className="text-xs text-gray-500 mt-1">
                {item.description}
              </p>
              </div>
            </div>
          ))}
        </div>

      
      </div>
    </section>
  );
};

