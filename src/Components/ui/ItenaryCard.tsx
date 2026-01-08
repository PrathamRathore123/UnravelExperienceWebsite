import { CalendarDays, CloudSnow, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { BookingForm } from "./Bookingform";
import logo  from "../../assets/unravellogo.png";
interface ItenaryCardProps {
  data: any;
}

export const ItenaryCard = ({ data }: ItenaryCardProps) => {
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);

  return (
    <>
      <div className="max-w-lg mx-auto space-y-6 font-sans">
        {/* Top Description Box */}
        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 text-gray-700 text-sm leading-relaxed">
          {data.box}
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
            <CloudSnow className="w-9 h-5 text-gray-700 mt-1" />
            <div>
              <p className="font-semibold text-gray-900">
                Weather (Jan – March 2026)
              </p>
              <p className="text-sm text-gray-600">
                {data.Weather}
              </p>
            </div>
          </div>

          {/* Inclusions */}
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-9 h-5 text-gray-700 mt-1" />
            <div>
              <p className="font-semibold text-gray-900">Inclusions</p>
              <p className="text-sm text-gray-600">
                {data.inclusion}
              </p>
            </div>
          </div>
        </div>
        <div className="pt-4">
          <button
            onClick={() => setIsBookingFormOpen(true)}
            className="flex items-center gap-2 rounded-full border border-gray-300 px-5 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 transition"
          >
            Book now with
            <span  className=" font-bold text-transparent [-webkit-text-stroke:0.2px_white] bg-gray-900  px-3 py-1 flex rounded-full text-sm font-bold">
              <img className="h-3 m-auto" src={logo} alt="" />&nbsp;ONE
            </span>
          </button>
        </div>
      </div>
      {isBookingFormOpen && (
        <BookingForm
          onClose={() => setIsBookingFormOpen(false)}
          tripTitle={data.title}
        />
      )}
    </>
  );
};

