import mess1 from "../../assets/3copy.png";
import mess2 from "../../assets/4copy.png";
import mess3 from "../../assets/5copy.png";
import mess4 from "../../assets/6.png";
export const FeaturesSection = () => {
  return (
    <>
 <div className="w-full flex flex-col items-center text-center px-4 py-20">

    
      <div className="bg-gray-200 text-gray-600 text-sm px-4 py-1 rounded-full mb-6">
        Your trip, in one conversation.
      </div>

      
      <h1 className="text-[34px] md:text-[30px] font-medium leading-tight text-black max-w-[650px]">
        Think of it as texting a friend 
        <br />
        who's really, <span className="font-[600] text-black text-[42px]" style={{ fontFamily: "Caveat" }}>really good at</span>
        <br />
        <span style={{ fontFamily: "Caveat" }} className="text-[42px]">travel.</span>
      </h1>

     
      <p className="text-gray-700 text-[15px] leading-[1.5] max-w-[700px] mt-6">
        Unravel One is your digital travel companion powered by AI, backed by humans. 
        It learns how you travel, suggests experiences you'll actually love, 
        and books them for you.
      </p>
    </div>

    <div className="w-full px-6 md:px-20 pb-20 bg-white">
      <div className="max-w-7xl md:mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-50 gap-y-20">
        
        <div className="text-center lg:w-[100%] flex justify-center items-center flex-col">
          <div className="  w-70  h-[300px] flex justify-center items-center  h-[260px] bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl mb-8 overflow-hidden">
          <img className="h-[100%] " src={mess1} />
          </div>
      <h2 className="text-[24px] md:text-[24px] font-semibold text-black">
        Discover &amp; Book
      </h2>
      <p className="text-gray-700 text-[14px] md:text-[17px] mt-2 ">
        Browse curated experiences. Get personalized recommendations. Book in seconds.
      </p>
      </div>

       
        <div className=" lg:w-[100%] flex justify-center items-center flex-col text-center ">
       
          <div className=" w-70  h-[300px] bg-gradient-to-br flex justify-center items-center  from-gray-50 to-gray-100 rounded-3xl mb-6 overflow-hidden">
          <img className="h-[100%] " src={mess2}  />
          </div>
      
        <h2 className="text-[24px]  font-semibold text-black">
        Manage Everything
      </h2>
      <p className="text-gray-700 text-[16px] md:text-[17px] mt-2 ">
        Your documents Reminder and Real-time updates. All in one place
      </p>
</div>

        <div className="text-center  lg:w-[100%] flex justify-center items-center flex-col">
          <div className="  w-70  h-[300px] bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl mb-8 p-6 overflow-hidden flex justify-center items-center ">
          <img className="h-[100%]" src={mess3}  />
        </div>
         <h2 className="text-[24px] font-semibold text-black">
        24/7 Support
      </h2>
      <p className="text-gray-700 text-[16px] md:text-[17px] mt-2 ">
       Questions at 2 AM? In-trip guidance? we're always on 
      </p>
        </div>

       
        <div className="text-center lg:w-[100%] flex justify-center items-center flex-col ">
      
          <div className=" w-70  h-[300px] bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl mb-8 p-6 overflow-hidden flex justify-center items-center   ">
          <img className="h-[100%] " src={mess4} />
          </div>
          
           <h2 className="text-[24px]  font-semibold text-black">
        Human when You Need IT
      </h2>
      <p className="text-gray-700 text-[16px] md:text-[17px] mt-2 ">
     Flights Custom itineraries. payment request we connect you instantly </p>
          </div>
      </div>
    </div>

    <div className="flex items-center justify-center  bg-white px-4">
      <div className="text-center max-w-xl">
        
        <h1 className="text-xl   text-gray-900 ">
          One conversation. Everything handled.
        </h1>

     
        <p className=" text-gray-900  text-base md:text-xl">
          Travel like someone&apos;s got your back.
        </p>

     
        <div className="mt-6">
          <a href="https://wa.me/+919740556008?text=Hello"
   target="_blank">
          <button className="inline-flex items-center gap-2 bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition">
            Meet Unravel One
            <span className="text-lg">→</span>
          </button></a>
        </div>
      </div>
    </div>
</>
  );
};
