import { CalendarDays, CloudSnow, CheckCircle2 } from "lucide-react";

export const ItenaryCard=() => {
  return (
    <div className="max-w-md mx-auto space-y-6 font-sans">
      {/* Top Description Box */}
      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 text-gray-700 text-sm leading-relaxed">
        You’ll be living your best winter-in-the-city life on this festive,
        culture-rich journey through London. Moving through the city’s most
        iconic neighbourhoods, the perfect blend of glowing lights, cosy pubs,
        riverside markets and crisp winter streets.
      </div>

      {/* Info Rows */}
      <div className="space-y-4">
        {/* Travel Window */}
        <div className="flex items-start gap-3">
          <CalendarDays className="w-5 h-5 text-gray-700 mt-1" />
          <div>
            <p className="font-semibold text-gray-900">Travel Window</p>
            <p className="text-sm text-gray-600">
              Winter months are from November to March
            </p>
          </div>
        </div>

        {/* Weather */}
        <div className="flex items-start gap-3">
          <CloudSnow className="w-5 h-5 text-gray-700 mt-1" />
          <div>
            <p className="font-semibold text-gray-900">
              Weather (Jan – March 2026)
            </p>
            <p className="text-sm text-gray-600">
              Crisp and cold with temperatures ranging 2–10°C; expect occasional
              rain and the possibility of light snow in January and February.
            </p>
          </div>
        </div>

        {/* Inclusions */}
        <div className="flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-gray-700 mt-1" />
          <div>
            <p className="font-semibold text-gray-900">Inclusions</p>
            <p className="text-sm text-gray-600">
              Curated luxury accommodations, exclusive seasonal experiences, and
              personalized support from Unravel One throughout your journey.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="pt-4">
        <button className="flex items-center gap-2 rounded-full border border-gray-300 px-5 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 transition">
          Book now with
          <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-xs font-semibold">
            UNRAVEL ONE
          </span>
        </button>
      </div>
    </div>
  );
};

