import mess1 from "../../assets/3copy.png";
import mess2 from "../../assets/4copy.png";
import mess3 from "../../assets/5copy.png";
import mess4 from "../../assets/6.png";
export const FeaturesSection = () => {
  return (
    <>
 <div className="w-full flex flex-col items-center text-center px-4 py-20">

      {/* Top Tag */}
      <div className="bg-gray-200 text-gray-600 text-sm px-4 py-1 rounded-full mb-6">
        Your trip, in one conversation.
      </div>

      {/* Main Heading */}
      <h1 className="text-[34px] md:text-[40px] font-medium leading-tight text-black max-w-[650px]">
        Think of it as texting a friend 
        <br />
        who's really, <span className="font-[600] text-black" style={{ fontFamily: "Caveat" }}>really good at</span>
        <br />
        <span style={{ fontFamily: "Caveat" }} className="text-[42px]">travel.</span>
      </h1>

      {/* Paragraph */}
      <p className="text-gray-700 text-[17px] leading-[1.5] max-w-[700px] mt-6">
        Unravel One is your digital travel companion powered by AI, backed by humans. 
        It learns how you travel, suggests experiences you'll actually love, 
        and books them for you.
      </p>
    </div>

    <div className="w-full px-6 md:px-20 pb-20 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-30 gap-y-20">

        {/* Discover & Book */}
        <div className="text-center w-[80%]">
        <div className="flex items-center ">
          <div className=" w-full flex items-center h-[360px] bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl mb-8 overflow-hidden">
          <img className="h-[100%] w-[100%]" src={mess1} />
          </div>
        </div>
      <h2 className="text-[34px] md:text-[40px] font-semibold text-black">
        Discover &amp; Book
      </h2>
      <p className="text-gray-700 text-[16px] md:text-[17px] mt-2 max-w-[600px]">
        Browse curated experiences. Get personalized recommendations. Book in seconds.
      </p>
        </div>

        {/* Manage Everything */}
        <div className="w-[80%] text-center">
        <div className="flex items-center  ">
          <div className=" w-full h-[360px] bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl mb-8 overflow-hidden">
          <img className="h-100 w-100" src={mess2}  />
          </div>
        </div>
        <h2 className="text-[34px] md:text-[40px] font-semibold text-black">
        Manage Everything
      </h2>
      <p className="text-gray-700 text-[16px] md:text-[17px] mt-2 max-w-[600px]">
        Your documents Reminder and Real-time updates. All in one place
      </p>
</div>
        {/* 24/7 Support */}
        <div className="text-center w-[80%]">
        <div className="flex items-center ">
          <div className=" w-full h-[360px] bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl mb-8 p-6 overflow-hidden">
          <img className="h-100 w-100" src={mess3}  />
          </div>
        </div>
         <h2 className="text-[34px] md:text-[40px] font-semibold text-black">
        24/7 Support
      </h2>
      <p className="text-gray-700 text-[16px] md:text-[17px] mt-2 max-w-[600px]">
       Questions at 2 AM? In-trip guidance? we're always on 
      </p>
        </div>

        {/* Human When You Need It */}
        <div className="text-center w-[80%]">
        <div className="flex items-center  ">
          <div className=" w-full h-[360px] bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl mb-8 p-6 overflow-hidden">
          <img className="h-100 w-100" src={mess4} />
          </div>
          </div>
           <h2 className="text-[32px] md:text-[39px] font-semibold text-black">
        Human when You Need IT
      </h2>
      <p className="text-gray-700 text-[16px] md:text-[17px] mt-2 max-w-[600px]">
     Flights Custom itineraries. payment request we connect you instantly </p>
          </div>
      </div>
    </div>
     <div className="w-full flex flex-col items-center text-center space-y-4 py-10">
      {/* Heading */}
      <div className="text-[20px] leading-[1.4] font-normal text-black/90">
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
};
