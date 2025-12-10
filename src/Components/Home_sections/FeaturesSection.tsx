import mess1 from "../../assets/3copy.png";
import mess2 from "../../assets/4copy.png";
import mess3 from "../../assets/5copy.png";
import mess4 from "../../assets/6.png";
export const FeaturesSection = () => {
  return (
    <div className="w-full px-6 md:px-20 py-20 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-30 gap-y-20">

        {/* Discover & Book */}
        <div className="flex items-center w-[80%]">
          <div className=" w-full h-[360px] bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl mb-8 overflow-hidden">
          <img className="h-100 w-100" src={mess1} />
          </div>
        </div>

        {/* Manage Everything */}
        <div className="flex items-center  w-[80%]">
          <div className=" w-full h-[360px] bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl mb-8 overflow-hidden">
          <img className="h-100 w-100" src={mess2}  />
          </div>
        </div>

        {/* 24/7 Support */}
        <div className="flex items-center  w-[80%]">
          <div className=" w-full h-[360px] bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl mb-8 p-6 overflow-hidden">
          <img className="h-100 w-100" src={mess3}  />
          </div>
        </div>

        {/* Human When You Need It */}
        <div className="flex items-center  w-[80%]">
          <div className=" w-full h-[360px] bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl mb-8 p-6 overflow-hidden">
          <img className="h-100 w-100" src={mess4} />
          </div>
          </div>
      </div>
    </div>

  );
};
