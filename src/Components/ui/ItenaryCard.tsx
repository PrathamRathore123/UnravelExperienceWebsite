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
    <section className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-lg overflow-hidden">
        
        {/* Header */}
        <div className="text-center py-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Unravel Insider get
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-4 px-4">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-white border rounded-2xl p-4 flex flex-col items-center text-center shadow-sm"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-16 mb-3 object-contain"
              />

              <h3
                className={`text-sm font-semibold ${
                  item.highlight ? "text-green-600" : "text-gray-900"
                }`}
              >
                {item.title}
              </h3>

              <p className="text-xs text-gray-500 mt-1">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="bg-black mt-6 px-5 py-6 text-white">
          <div className="flex justify-between text-xs text-gray-300 mb-3">
            <span>Up to</span>
            <span>Discounts Of The Best</span>
          </div>

          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="italic text-sm">Flexible Cancellation</p>
              <p className="text-xl font-semibold">24 Hours</p>
            </div>

            <div className="text-right">
              <p className="text-sm">NO BLACKOUT DATES</p>
              <p className="italic text-sm">Flexible Rates</p>
            </div>
          </div>

          <button className="w-full bg-white text-black font-semibold py-3 rounded-full text-sm">
            BECOME AN INSIDER
          </button>
        </div>
      </div>
    </section>
  );
};

