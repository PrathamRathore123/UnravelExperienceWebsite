import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const Calendar: React.FC = () => {
  const today = new Date();

  // states
  
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState<number | null>(today.getDate());

  const days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

  const monthNames = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  const getDaysInMonth = (y: number, m: number) =>
    new Date(y, m + 1, 0).getDate();

  // Convert Sunday=0 to Monday=0
  const getShift = (y: number, m: number) => {
    const d = new Date(y, m, 1).getDay();
    return d === 0 ? 6 : d - 1;
  };

  const handlePrev = () => {
    setSelectedDate(null);

    if (month === 0) {
      setMonth(11);
      setYear(y => y - 1);
    } else {
      setMonth(m => m - 1);
    }
  };

  const handleNext = () => {
    setSelectedDate(null);

    if (month === 11) {
      setMonth(0);
      setYear(y => y + 1);
    } else {
      setMonth(m => m + 1);
    }
  };

  const shift = getShift(year, month);
  const totalDays = getDaysInMonth(year, month);
  const blanks = Array(shift).fill(null);
  const dates = Array.from({ length: totalDays }, (_, i) => i + 1);

  // Ensure today's date only selected when landing on today's month
  useEffect(() => {
    if (
      year === today.getFullYear() &&
      month === today.getMonth()
    ) {
      setSelectedDate(today.getDate());
    } else {
      setSelectedDate(null);
    }
  }, [month, year]);

  return (
    <div className="w-full md:w-[320px] rounded-xl border p-6 shadow-sm bg-white">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">
          {monthNames[month]} {year}
        </h2>

        <div className="flex items-center gap-2">
          <button onClick={handlePrev} className="p-1 rounded-full hover:bg-gray-100">
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button onClick={handleNext} className="p-1 rounded-full hover:bg-gray-100">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Weekday names */}
      <div className="grid grid-cols-7 text-center text-sm text-gray-500 mb-2">
        {days.map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      {/* Calendar days */}
      <div className="grid grid-cols-7 text-center gap-y-3">

        {blanks.map((_, i) => (
          <div key={`blank-${i}`} />
        ))}

        {dates.map((d) => {
          const isSelected = selectedDate === d;

          return (
            <button
              key={d}
              onClick={() => setSelectedDate(d)}
              className={`w-9 h-9 flex items-center justify-center rounded-full text-sm transition
                ${isSelected ? "bg-black text-white" : "hover:bg-gray-100"}`}
            >
              {d}
            </button>
          );
        })}
      </div>
      <div className="pr-10 mt-10 block md:hidden">
      <p className="text-[grey] mt-5 ">8 AM</p>
      <h2 className="text-md">Breakfast</h2>
    
      <p className="text-[grey] mt-5">10 AM</p>
      <h2>Travel to venue</h2>
      
      <p className="text-[grey] mt-5">10:30 AM</p>
      <h2>Meet Santa</h2>
    </div></div>
  );
};


