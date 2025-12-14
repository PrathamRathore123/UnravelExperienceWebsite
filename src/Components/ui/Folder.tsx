
import stickerfirst from '../../assets/rectangle-239-1.png'
import stickersecond from '../../assets/big-ben-handdrawn-london-travel-sticker-6188449-removebg-preview.png'
import image1 from '../../assets/rectangle-239-9.png'
import image2 from '../../assets/rectangle-239-11.png'
import image3 from '../../assets/images.jpg'
import image4 from '../../assets/images1.jpg'

interface FolderCardProps {
  title: string;

}

export function FolderCard({ title }: FolderCardProps) {
  return (
    <div className="flex flex-col items-center group  ">
      {/* Folder */}
      
      <div className="relative w-[150px] h-[80px] md:w-[190px] md:h-[200px]">
        {/* Images that slide out in arc */}
        <div className="absolute top-[20px] left-[50px] p-1 bg-white rounded-xl shadow-lg transition-all duration-500 -translate-y-8 -translate-x-8 -rotate-8 group-hover:-translate-y-32 group-hover:-translate-x-24 group-hover:-rotate-15 z-10">
          <img className="w-19 h-16 md:h-20 rounded-xl" src={image1} alt="" />
        </div>
        <div className="absolute top-[20px] left-[50px] p-1 bg-white  rounded-xl shadow-lg transition-all duration-500 -translate-y-6 -translate-x-3 -rotate-4 group-hover:-translate-y-36 group-hover:-translate-x-10 group-hover:-rotate-8 z-20">
          <img className="w-19 h-16 md:h-20 rounded-xl" src={image2} alt="" />
        </div>
        <div className="absolute top-[20px] left-[50px] p-1 bg-white rounded-xl shadow-lg transition-all duration-500 -translate-y-6 translate-x-3 rotate-4 group-hover:-translate-y-36 group-hover:translate-x-10 group-hover:rotate-8 z-30">
          <img className="w-19 h-16 md:h-20 rounded-xl" src={image3} alt="" />
        </div>
        <div className="absolute top-[20px] left-[50px] p-1 bg-white rounded-xl shadow-lg transition-all duration-500 -translate-y-8 translate-x-8 rotate-8 group-hover:-translate-y-32 group-hover:translate-x-24 group-hover:rotate-15 z-40">
          <img className="w-19 h-16 md:h-20 rounded-xl" src={image4} alt="" />
        </div>
       {/* Folder Body */}
        <div style={{clipPath: 'polygon(38% 0, 48% 13%, 100% 13%, 100% 100%, 70% 100%, 0 99%, 0 35%, 0 0)'}} className="absolute rounded-2xl  top-[-5px] w-full h-[120px] md:h-[150px] bg-[#706A6B]/20 md:bg-[#E9E8E8]/20 backdrop-blur-lg    shadow-lg z-50 transform perspective-1000 rotate-x-[-15deg]" />
        {/* Folder Flap (blur effect) - half open */}
        <div className="absolute -top-3 left-3 w-[90%] h-[55px] bg-[#807b8e]/20 backdrop-blur-sm rounded-t-2xl shadow-sm z-9   origin-bottom-left"></div>

        {/* Sticker */}
        <img
          src={stickerfirst}
          
          className="absolute top-18 left-4 w-10 h-10 object-cover z-50"
        />
          <img
          src={stickersecond}
          
          className="absolute top-4 right-4 w-10 h-16 object-cover z-50"
        />
      </div>

      {/* Title */}
      <p className="mt-9 md:mt-4 text-center text-lg font-medium text-gray-800">
        {title}
      </p>
    </div>
  );
}
