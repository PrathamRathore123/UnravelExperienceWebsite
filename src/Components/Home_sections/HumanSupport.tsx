
export const HumanSupport=()=> {
  return (
    <>
    
    <div className=" w-full bg-white flex justify-center px-4 py-8 sm:hidden">
      {/* Mobile container */}
      <div className="w-full max-w-[360px]">
        {/* Header */}
        <h1 className="text-[22px] font-semibold text-gray-900 mb-2">
          Human When You Need It
        </h1>
        <p className="text-gray-500 text-[13px] mb-6 leading-relaxed">
          Flights. Custom itineraries. Complex requests.
          <br />
          We connect you instantly.
        </p>

        {/* Cards */}
        <div className="space-y-4">
          {/* Card 1 */}
          <div className="bg-white flex-col rounded-2xl p-4 shadow-[0_8px_24px_rgba(0,0,0,0.09)] border border-gray-100 flex gap-3">
            <div className="text-xl leading-none">✈️</div>
            <div>
              <h3 className="font-medium text-gray-900 text-[14px]">
                Flight Booking Request
              </h3>
              <p className="text-[12px] text-gray-500 mt-1 leading-relaxed">
                Need to book a multi-city flight with
                specific airline preferences?
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white flex-col rounded-2xl p-4 shadow-[0_8px_24px_rgba(0,0,0,0.09)] border border-gray-100 flex gap-3">
            <div className="text-xl leading-none">🌴</div>
            <div>
              <h3 className="font-medium text-gray-900 text-[14px]">
                Custom Bali Itinerary
              </h3>
              <p className="text-[12px] text-gray-500 mt-1 leading-relaxed">
                Looking for a 10-day wellness retreat
                with specific resort preference?
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className='bg-white rounded-2xl p-4 shadow-[8px_8px_24px_rgba(0,0,0,0.09)] border border-gray-100'>
          <div className="flex flex-col gap-3">
            <div className="text-xl leading-none">💳</div>
            <div>
              <h3 className="font-medium text-gray-900 text-[14px]">
                Refund Assistance
              </h3>
              <p className="text-[12px] text-gray-500 mt-1 leading-relaxed">
                Need help processing a cancellation
                and refund for upcoming trip.
              </p>
            </div>
          </div>
           {/* Bottom Status Card */}
        <div className="mt-6 bg-gradient-to-b from-[#2b2b2b] to-black text-white rounded-2xl px-5 py-4 shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
          <div className="flex flex-col justify-center items-center gap-3 text-center">
             <div className="flex gap-1 items-center">
                <span className="w-1.5 h-1.5 bg-white rounded-full" />
              <span className="w-1.5 h-1.5 bg-white rounded-full opacity-70" />
               <span className="w-1.5 h-1.5 bg-white rounded-full opacity-40" />
            </div>
            <div>
              <p className="text-[14px] font-medium">Connecting you now</p>
              <p className="text-[12px] text-gray-300 mt-1">
                This usually takes under 30 seconds
              </p>
            </div>
           
          </div>
        </div>
          </div>
        </div>
      </div>
    </div>  
     <div className="w-full flex flex-col items-center text-center space-y-4 py-10">
      {/* Heading */}
      <div className="text-[19px] leading-[1.4] font-normal text-black/90">
        <p>One conversation. Everything handled.</p>
        <p>Travel like someone's got your back.</p>
      </div>
<br /><br />
      {/* Button */}
      <button
        className="
          flex items-center gap-2 
          bg-black text-white 
          rounded-full px-6 py-3 
          text-[15px] font-medium 
          hover:bg-black/90 transition
        "
      >
        Meet Unravel One
        <span className="text-xl">→</span>
      </button>
    </div>
   </>
  );
}

 