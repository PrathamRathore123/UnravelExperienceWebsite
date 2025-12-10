
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
    <div className="flex flex-col items-center group">
      {/* Folder */}
      <div className="relative w-[190px] h-[200px]">
        {/* Images that slide out in arc */}
        <div className="absolute top-[20px] left-[35px] w-[120px] h-[90px] bg-gradient-to-br from-blue-200 to-blue-400 rounded-xl shadow-lg transition-all duration-500 -translate-y-8 -translate-x-8 -rotate-8 group-hover:-translate-y-32 group-hover:-translate-x-24 group-hover:-rotate-15 z-10">
          <img className="w-100 h-23 rounded-xl" src={image1} alt="" />
        </div>
        <div className="absolute top-[20px] left-[35px] w-[120px] h-[90px] bg-gradient-to-br from-purple-200 to-purple-400 rounded-xl shadow-lg transition-all duration-500 -translate-y-6 -translate-x-3 -rotate-4 group-hover:-translate-y-36 group-hover:-translate-x-10 group-hover:-rotate-8 z-20">
          <img className="w-100 h-23 rounded-xl" src={image2} alt="" />
        </div>
        <div className="absolute top-[20px] left-[35px] w-[120px] h-[90px] bg-gradient-to-br from-pink-200 to-pink-400 rounded-xl shadow-lg transition-all duration-500 -translate-y-6 translate-x-3 rotate-4 group-hover:-translate-y-36 group-hover:translate-x-10 group-hover:rotate-8 z-30">
          <img className="w-100 h-23 rounded-xl" src={image3} alt="" />
        </div>
        <div className="absolute top-[20px] left-[35px] w-[120px] h-[90px] bg-gradient-to-br from-orange-200 to-orange-400 rounded-xl shadow-lg transition-all duration-500 -translate-y-8 translate-x-8 rotate-8 group-hover:-translate-y-32 group-hover:translate-x-24 group-hover:rotate-15 z-40">
          <img className="w-100 h-23 rounded-xl" src={image4} alt="" />
        </div>

        {/* Folder Body */}
        <div className="absolute top-3 w-full h-[130px] bg-white rounded-2xl shadow-lg z-50" />

        {/* Folder Flap (blur effect) - half open */}
        <div className="absolute -top-1 left-0 w-full h-[55px] bg-white/70 backdrop-blur-md rounded-t-2xl shadow-sm z-50 transform -rotate-3 origin-bottom-left"></div>

        {/* Sticker */}
        <img
          src={stickerfirst}
          
          className="absolute top-19 left-4 w-10 h-10 object-cover z-50"
        />
          <img
          src={stickersecond}
          
          className="absolute top-4 right-4 w-10 h-16 object-cover z-50"
        />
      </div>

      {/* Title */}
      <p className="mt-4 text-center text-lg font-medium text-gray-800">
        {title}
      </p>
    </div>
  );
}
