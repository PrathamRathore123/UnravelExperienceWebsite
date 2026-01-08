import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface BookingFormProps {
  onClose?: () => void;
  tripTitle?: string;
  price?: string;
}

interface LocationState {
  tripTitle?: string;
  price?: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  startDate: string;
  endDate: string;
  guests: number | string;
}

export const BookingForm: React.FC<BookingFormProps> = ({ onClose, tripTitle: propTripTitle, price: propPrice }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const tripTitle = propTripTitle || (location.state as LocationState)?.tripTitle || "Palm City Villa";
  const price = propPrice || (location.state as LocationState)?.price || "$1,200";

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    startDate: "",
    endDate: "",
    guests: 2,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState<1 | 2>(1);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean>(typeof window !== "undefined" ? window.innerWidth <= 768 : false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [showErrorPopup, setShowErrorPopup] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClose = () => {
    if (onClose) return onClose();
    navigate("/");
  };

  const handleContinueExploring = () => navigate("/");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "guests" ? (value === "" ? "" : Number(value)) : value,
    }));
  };

  const nextStep = () => {
    if (currentStep === 1) {
      if (!formData.name || !formData.email || !formData.phone) {
        setErrorMessage("Please fill in all required fields.");
        setShowErrorPopup(true);
        return;
      }
      setCurrentStep(2);
    }
  };

  const prevStep = () => {
    setCurrentStep(1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep !== 2 || isLoading) return;

    if (!formData.name || !formData.email || !formData.phone || !formData.startDate) {
      setErrorMessage("Please fill in all required fields.");
      setShowErrorPopup(true);
      return;
    }

    setIsLoading(true);
    try {
      const bookingData = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        destination: tripTitle,
        travel_date: formData.startDate,
        guests: Number(formData.guests) || 1,
        special_requests: "",
      };

      const response = await fetch("http://localhost:8000/api/receive-customer-booking/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setErrorMessage(`Booking failed (${response.status}). Please try again.`);
        setShowErrorPopup(true);
      }
    } catch {
      setErrorMessage("Network error. Please try again.");
      setShowErrorPopup(true);
    } finally {
      setIsLoading(false);
    }
  };

  // min date for date inputs
  const minDate = new Date().toISOString().split("T")[0];

  // ===== SUCCESS (isSubmitted) UI with flip postcard and pulse =====
  if (isSubmitted) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 backdrop-blur-sm">
        {/* Custom styles to preserve 3D flip & pulse animation */}
        <style>{`
          .card-3d {
            perspective: 1200px;
          }
          .card-3d-inner {
            transform-style: preserve-3d;
            transition: transform 0.6s;
          }
          .card-3d-inner.flipped {
            transform: rotateY(180deg);
          }
          .card-face {
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            position: absolute;
            inset: 0;
            border-radius: 0.75rem;
            overflow: hidden;
          }
          .card-back {
            transform: rotateY(180deg);
          }
          @keyframes pulse-scale {
            0% { transform: scale(1); }
            50% { transform: scale(1.06); }
            100% { transform: scale(1); }
          }
        `}</style>

        <div
          className={`card-3d flex gap-12 items-center p-6`}
          onClick={() => setIsFlipped((s) => !s)}
        >
          <div
            className={`relative card-3d-inner ${isFlipped ? 'flipped' : ''}`}
            style={{
              width: isMobile ? 380 : 520,
              height: isMobile ? 320 : 380,
            }}
          >
            {/* FRONT */}
            <div className="card-face bg-gradient-to-br from-indigo-500 to-purple-600 shadow-2xl border border-white/20">
              <div className="flex flex-col h-full">
                <div
                  className="w-full h-[70%] bg-center bg-cover"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(0,0,0,0.28), rgba(0,0,0,0.28)), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop')",
                  }}
                />
                <div className="h-[30%] bg-white p-4 flex justify-between items-center">
                  <div>
                    <div className="text-lg font-semibold text-gray-800">Booking Details</div>
                    <div className="text-sm text-gray-600 leading-relaxed">
                      Guest: {formData.name} <br />
                      Date: {formData.startDate ? new Date(formData.startDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "-"} <br />
                      Guests: {formData.guests}
                    </div>
                  </div>
                  <div className="text-xs italic text-gray-500 bg-black/10 px-2 py-1 rounded-full">Click to See All Details →</div>
                </div>
              </div>
            </div>

            {/* BACK */}
            <div className="card-face card-back bg-gray-100 border border-gray-200 shadow-lg">
              <div className="relative h-full">
                {/* timeline */}
                <div className="absolute w-50 top-3 left-4 right-4 m-auto flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                  <div className="flex-1 h-px bg-gray-300 mx-2 relative">
                    <div className="absolute top-1 -left-5 text-[10px] text-gray-500">
                      {formData.startDate ? new Date(formData.startDate).toLocaleDateString("en-US", { month: "short", day: "numeric" }) : "Check-in"}
                    </div>
                    <div className="absolute top-1 -right-5 text-[10px] text-gray-500">
                      {formData.endDate ? new Date(formData.endDate).toLocaleDateString("en-US", { month: "short", day: "numeric" }) : "Check-out"}
                    </div>
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                </div>

                {/* left column */}
                <div className="absolute left-4 top-5 w-1/2">
                  <div className="text-2xl font-light text-amber-600 italic -rotate-[1deg]">Unravel</div>

                  <div className="mt-3 p-2 border border-gray-300 rounded-sm -rotate-[1deg] bg-white/60">
                    <div className="text-[9px] text-gray-500">WHEN</div>
                    <div className="text-sm font-bold text-gray-800">
                      {formData.startDate ? new Date(formData.startDate).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" }) : "Travel Date"}
                    </div>
                    <div className="text-[10px] text-gray-600">{formData.guests} Guest{Number(formData.guests) > 1 ? "s" : ""}</div>
                  </div>

                  <div
                    className="mt-3 rounded-md overflow-hidden border-2 border-emerald-200 shadow-md transform -rotate-[2deg]"
                    style={{ width: isMobile ? 160 : 200, height: isMobile ? 120 : 140, background: "linear-gradient(135deg,#b8e6b8,#90d690)" }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=600&fit=crop&crop=center"
                      alt="Map location"
                      className="w-full h-full object-cover opacity-90"
                    />
                    <div className="absolute bottom-6 left-8 w-7 h-7 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-md border-2 border-white">📍</div>
                  </div>

                  <div className="mt-2 text-[10px] text-gray-500">WHERE</div>
                  <div className="text-sm font-bold text-gray-800">{tripTitle}</div>
                  <div className="text-[10px] text-gray-600">Confirmed Booking</div>
                </div>

                {/* right column */}
                <div className="absolute right-4 top-14 w-1/2 pr-2">
                  <div className="text-center mb-3">
                    <div className="text-xs font-bold text-green-600">Booking Confirmed</div>
                    <div className="text-[10px] text-gray-600">{new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</div>
                  </div>

                  <div className="absolute top-0 right-0 w-14 h-14 border-2 border-dashed border-amber-300 rounded-md bg-amber-50 flex items-center justify-center transform rotate-[3deg]">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 text-white flex items-center justify-center font-serif font-bold">A</div>
                  </div>

                  <div className="mt-16 text-sm text-gray-800 leading-relaxed font-cursive transform rotate-[0.5deg] border-2 border-dashed border-gray-300 p-3 rounded">
                    hey, come hang at our<br />
                    community meetup in {tripTitle.toLowerCase()}!<br />
                    (doesn't this postcard give vintage Amie vibes? hah)<br />
                    see you there?<br /><br />
                    <strong>denninho</strong>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleContinueExploring();
                    }}
                    className="absolute bottom-4 right-6 px-3 py-1 rounded-full text-xs font-medium shadow-md"
                    style={{ background: "linear-gradient(135deg,#ff6b35,#f7931e)", color: "white" }}
                  >
                    Continue
                  </button>
                </div>

                <div className="absolute left-1/2 top-[15%] bottom-[15%] w-px bg-white/20 -translate-x-1/2" />
                <div className="absolute bottom-2 left-4 text-[10px] italic text-gray-500">← Click to flip back</div>
              </div>
            </div>
          </div>

          {/* Confirmation text & CTA */}
          <div className="flex flex-col items-center gap-8">
            <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg,#10b981,#059669)", animation: "pulse-scale 2s infinite" }}>
              <span className="text-4xl text-white">✓</span>
            </div>

            <div className="text-center">
              <h2 className={`text-2xl font-extrabold text-gray-800`}>Booking Confirmed!</h2>
              <p className="text-gray-600 mt-2">Your adventure awaits! Check your email for details.</p>
            </div>

            <button
              onClick={handleContinueExploring}
              className="px-10 py-3 rounded-full text-lg font-semibold"
              style={{ background: "linear-gradient(135deg,#ff6b35,#f7931e)", color: "white", boxShadow: "0 15px 30px rgba(255,107,53,0.35)" }}
            >
              Continue Exploring →
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ===== MAIN FORM UI (no theme logic) =====
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-white/90 to-gray-100/90 backdrop-blur-sm p-4">
      <div className="w-full max-w-md sm:max-w-lg rounded-xl p-6 sm:p-8 shadow-xl border border-gray-200 bg-white/95 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-start mb-5">
          <div>
            <h2 className="text-xl sm:text-2xl font-light text-gray-800">{tripTitle}</h2>
            <p className="text-sm text-gray-600">{price}/night</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleClose}
              className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-800 hover:bg-gray-100 transition-colors"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>

        {/* steps indicators */}
        <div className="flex justify-center gap-3 mb-5">
          {[1, 2].map((s) => (
            <div
              key={s}
              className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${currentStep >= s ? "bg-gradient-to-br from-orange-500 to-yellow-400 text-white" : "bg-gray-200 text-gray-600"}`}
            >
              {s}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          {currentStep === 1 && (
            <div>
              <h3 className="text-base sm:text-lg font-medium text-gray-800 mb-4">Personal Information</h3>

              <div className="space-y-3">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Full Name"
                  className="w-full rounded-xl px-4 py-3 border border-gray-200 bg-gray-50 outline-none focus:border-orange-400 transition-colors"
                />

                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Email Address"
                  className="w-full rounded-xl px-4 py-3 border border-gray-200 bg-gray-50 outline-none focus:border-orange-400 transition-colors"
                />

                <input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="Phone Number"
                  className="w-full rounded-xl px-4 py-3 border border-gray-200 bg-gray-50 outline-none focus:border-orange-400 transition-colors"
                />
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <h3 className="text-base sm:text-lg font-medium text-gray-800 mb-4">Travel Details</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                <div>
                  <label className="text-sm text-gray-600 block mb-1">Check-in</label>
                  <input
                    name="startDate"
                    type="date"
                    value={formData.startDate}
                    min={minDate}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-xl px-3 py-3 border border-gray-200 bg-gray-50 focus:border-orange-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600 block mb-1">Check-out</label>
                  <input
                    name="endDate"
                    type="date"
                    value={formData.endDate}
                    min={formData.startDate || minDate}
                    onChange={handleInputChange}
                    className="w-full rounded-xl px-3 py-3 border border-gray-200 bg-gray-50 focus:border-orange-400 transition-colors"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="text-sm text-gray-600 block mb-1">Number of Guests</label>
                <input
                  name="guests"
                  type="number"
                  min={1}
                  value={formData.guests}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-xl px-4 py-3 border border-gray-200 bg-gray-50 focus:border-orange-400 transition-colors"
                />
              </div>
            </div>
          )}

          <div className="flex gap-3 mt-5">
            {currentStep > 1 && (
              <button type="button" onClick={prevStep} className="flex-1 rounded-xl px-4 py-3 border border-gray-200 bg-gray-50 hover:bg-gray-100 transition-colors">
                Previous
              </button>
            )}

            {currentStep < 2 ? (
              <button type="button" onClick={nextStep} className="flex-1 rounded-xl px-4 py-3 bg-gradient-to-br from-orange-500 to-yellow-400 text-white shadow-lg hover:shadow-xl transition-shadow">
                Next Step
              </button>
            ) : (
              <button type="submit" disabled={isLoading} className="flex-1 rounded-xl px-4 py-3 bg-gradient-to-br from-orange-500 to-yellow-400 text-white shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-all">
                {isLoading ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                    </svg>
                    Processing...
                  </>
                ) : "Confirm Booking"}
              </button>
            )}
          </div>
        </form>

        {/* Custom Error Popup */}
        {showErrorPopup && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-xl p-6 shadow-2xl max-w-sm mx-4">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 text-center mb-2">Error</h3>
              <p className="text-gray-600 text-center mb-6">{errorMessage}</p>
              <button
                onClick={() => setShowErrorPopup(false)}
                className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors font-medium"
              >
                OK
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


