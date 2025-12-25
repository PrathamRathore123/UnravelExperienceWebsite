import { ChevronRightIcon,ChevronLeftIcon} from "lucide-react";
import {useState,useEffect} from "react";
import { Navbar } from "../ui/Navbar";
import { useParams } from "react-router-dom";
import { Button } from "../ui/buttons";
import { Calendar } from "../ui/Calendar";
import { Card, CardContent } from "../ui/card";
import { itenaryData } from "../data/itenaryData";
import { BookingForm } from "../ui/Bookingform";
import {ItenaryCard} from "../ui/ItenaryCard"
import image from "../../assets/UnravelLogo.png"
import Image from "../../assets/image.png"
interface Day {
  day: string;
  title: string;
  description: string;
  image: string;
 
}



const thingsToKnowCards = [
  {
    icon: "https://c.animaapp.com/mirmmjt1sI61N8/img/vector-7.svg",
    title: "The stay",
    description:
      "8 nights at a boutique hotel in central London. Breakfast included daily.",
  },
  {
    icon: "https://c.animaapp.com/mirmmjt1sI61N8/img/vector-1.svg",
    title: "Getting Around",
    description:
      "Private airport transfers. Private drivers for scheduled experiences. Some days, you explore on your own.",
  },
  {
    icon: "https://c.animaapp.com/mirmmjt1sI61N8/img/vector-2.svg",
    title: "What's Handled",
    description:
      "Every experience mentioned. Entry tickets. Guides. Tastings. Travel insurance. 24/7 support via Unravel One.",
  },
  {
    icon: "https://c.animaapp.com/mirmmjt1sI61N8/img/vector-6.svg",
    title: "What's On You",
    description:
      "Flights (we can help arrange them). Lunches and dinners (except where noted). Optional activities on your free day.",
  },
  {
    icon: "https://c.animaapp.com/mirmmjt1sI61N8/img/vector.svg",
    title: "Pricing",
    description:
      "Customized based on your travel dates. Share your dates with Unravel One for a tailored quote.",
  },
  {
    icon: "https://c.animaapp.com/mirmmjt1sI61N8/img/vector-3.svg",
    title: "Good to Know",
    description:
      "December is peak Christmas season in London. Book early. Weather is cold and often damp pack layers & waterproof shoes.",
  },
];



export  const Itenary = () => {
  const { id } = useParams();
  const data = itenaryData[id || 'london'];
  const [selectedDay, setSelectedDay] = useState<Day | null>(null);
  const [showBookingForm, setShowBookingForm] = useState(false);

 useEffect(() => {
    const firstSection = document.getElementById("start");
    if (firstSection) {
      firstSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <>
  <Navbar/>
  <br />
    <div id="start" className="relative w-full bg-white min-h-screen" data-model-id="462:506">
      <div className="w-full">
        {/* Navigation */}
      <h1 className=" block md:hidden [font-family:'BDO_Grotesk-Regular',Helvetica] font-normal text-center text-black text-3xl  tracking-[-3.50px] leading-tight md:leading-[68px] ">
                {data.title}
              </h1>
                 <p className="block md:hidden [font-family:'Inter_Variable-Bold',Helvetica] font-bold text-[#9b9b9b] text-sm text-center tracking-[-0.32px] leading-[18px] ">
                {data.subtitle}
              </p>
        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row gap-10 container  px-4 md:px-8 py-12">
          <div className="grid grid-cols-2 gap-2 md:gap-x-3  max-w-[1100px] mx-auto mb-8 lg:mb-16">
            <img
              className="w-full h-[150px] sm:h-[200px] md:h-[300px] md:rounded-tl-[150px] object-cover"
              alt={data.title}
              src={data.heroImages[0]}
            />
            <img
              className="w-full h-[150px] sm:h-[200px] md:h-[300px] object-cover md:rounded-tr-[20px]"
              alt={data.title}
              src={data.heroImages[1]}
            />
            <img
              className="w-full h-[150px] sm:h-[200px] md:h-[300px] object-cover rounded-bl-[75px] md:rounded-bl-[20px]"
              alt={data.title}
              src={data.heroImages[2]}
            />
            <img
              className="w-full h-[150px] sm:h-[200px] md:h-[300px] rounded-br-[75px] md:rounded-br-[150px] object-cover"
              alt={data.title}
              src={data.heroImages[3]}
            />
          </div>

          <div className="max-w-[1200px] md:mx-auto ">
            <div>
              <h1 className="hidden md:block [font-family:'BDO_Grotesk-Regular',Helvetica] font-normal text-black text-[44px] tracking-[-3.50px] leading-tight  ">
                {data.title}
              </h1>
              <p className="hidden md:block [font-family:'Inter_Variable-Bold',Helvetica] font-bold text-[#9b9b9b] text-md tracking-[-0.32px] leading-[28px] mb-2">
                {data.subtitle}
              </p>
              <div className="[font-family:'BDO_Grotesk-DemiBold',Helvetica] font-bold text-black text-lg md:text-xl tracking-[-0.32px] leading-[26px] mb-2">
                {data.duration}
              </div>
              <div className="[font-family:'Inter_Variable-Bold',Helvetica] font-bold text-black text-base md:text-lg tracking-[-0.32px] leading-[26px]">
                {data.location}
              </div>
            </div>

             <ItenaryCard/>
          </div>
        </section>
       
        {/* Journey Section */}
        <section className="container mx-auto px-4 md:px-8 py-12">
          <h2 className="[font-family:'BDO_Grotesk-DemiBold',Helvetica] font-bold text-[#222222] text-2xl md:text-[30px] tracking-[-0.44px] leading-[26px] mb-12 max-w-[1200px] mx-auto">
            The&nbsp;&nbsp;Journey
          </h2>

          <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-12">
            <div className="flex-1">
              {data.journeyDays.map((day: Day, index: number) => (
                
                <Card 
                  key={index}
                  onClick={()=>setSelectedDay(day)}
                  className="border-none mb-8 shadow-none bg-transparent"
                >
                  <CardContent className="flex  gap-6 p-0">
                    <div
                      className="w-[110px] h-[110px] rounded-2xl bg-cover bg-center flex-shrink-0"
                      style={{ backgroundImage: `url(${day.image})` }}
                    />
                    <div className="flex-1">
                      <h3 className="[font-family:'BDO_Grotesk-Medium',Helvetica] font-medium text-[#222222] text-[20px] tracking-[0] leading-[24px] mb-2">
                        {day.day}
                      </h3>
                      <p className="[font-family:'BDO_Grotesk-Regular',Helvetica] font-normal text-[#6a6a6a] text-[15px] tracking-[0] leading-[20px]">
                        {day.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
              <a href={`${data.pdf}`} download={`${data.title}.pdf`} className="bg-[#222222] text-white rounded-[8px] px-12 py-5 h-auto [font-family:'Inter_Variable-Bold',Helvetica] font-bold text-xl tracking-[-0.32px] leading-[19.6px] hover:bg-[#333333] transition-colors">
                Download Itinerary
              </a>
             
              
            </div>

           <div className="flex-shrink-0 py-10">
              <Calendar />
               <div className="flex wrap items-center gap-4 mt-12">
              <Button 
                onClick={() => setShowBookingForm(true)}
                className="bg-[linear-gradient(90deg,rgba(34,34,34,1)_0%,rgba(57,57,57,1)_100%)] text-white rounded-[200px] px-4  h-auto [font-family:'BDO_Grotesk-Medium',Helvetica] font-medium text-base hover:opacity-90 transition-opacity">
                Book with Unravel One
                <div className="ml-3 w-[38px] h-[38px] bg-[#d9d9d9] rounded-full flex items-center justify-center">
                  <ChevronRightIcon className="w-4 h-4 text-black" />
                </div>
              </Button>
            </div>
            </div>
          </div>
          {selectedDay && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div
            className="
              relative bg-white rounded-3xl shadow-xl p-8 w-[90%] max-w-[900px]
              animate-[popup_0.25s_ease-out]
            "
          >
            <button
              onClick={() => setSelectedDay(null)}
              className="md:absolute mb-4 top-4 right-4 bg-black text-white w-8 h-8 rounded-full flex items-center justify-center"
            ><ChevronLeftIcon></ChevronLeftIcon> </button>

            <div className="flex flex-col md:flex-row  gap-3">
                <h3 className="text-center block md:hidden text-[25px] font-bold text-[#222] ">
                  {selectedDay.day}
                </h3>
                <p className=" text-center block md:hidden text-[20px] font-semibold text-[#222] mb-4">
                  {selectedDay.title}
                </p>
              <img
                src={selectedDay.image}
                alt=""
                className=" w-[100%] md:w-[300px] md:h-[220px] m-auto rounded-2xl object-cover"
              />

              <div className="flex-1">
                <h3 className="hidden md:block text-[22px] font-bold text-[#222] mb-1">
                  {selectedDay.day}
                </h3>

                <p className=" hidden md:block text-[18px] font-semibold text-[#222] mb-4">
                  {selectedDay.title}
                </p>

                <p className=" text-[15px] leading-[22px] text-[#444] whitespace-pre-line">
                  {selectedDay.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
        </section>

        {/* Gallery Section */}
        <section >
          <div className=" justify-between gap-12 max-w-[1200px] mx-auto">
            <div className="flex-1">
              <h2 className="[font-family:'BDO_Grotesk-Bold',Helvetica] font-bold text-[#222222] text-2xl  md:text-4xl  tracking-[-1.00px] leading-tight sm:leading-normal md:leading-relaxed lg:leading-[60px] text-center mb-2">
                Memories Captured
              </h2>
              <p className="[font-family:'BDO_Grotesk-Medium',Helvetica] font-medium text-[#383838] text-lg sm:text-xl md:text-xl text-center tracking-[-0.50px] mb-5">
                Quite Scenes That Stay With You 
              </p>
              <img className="block md:hidden w-full h-auto" alt={data.galleryTitle} src={Image}/>
              <img className="w-full h-auto hidden md:block" alt={data.galleryTitle} src={data.galleryImage}/>
            </div>
          </div>
        </section>

        {/* Things to Know Section */}
        <section className="container mx-auto px-4 md:px-8 py-16">
          <h2 className="[font-family:'BDO_Grotesk-DemiBold',Helvetica] font-bold text-black text-2xl md:text-[34px] tracking-[0] leading-[60px] text-center mb-10">
            Things to Know
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
            {thingsToKnowCards.map((card, index) => (
              <Card
                key={index}
                className="rounded-xl border border-[#00000026] shadow-[0px_4px_34px_#0000001a] p-6"
              >
                <CardContent className="p-0 space-y-4">
                  <img className="hidden md:block w-12 h-10" alt={card.title} src={card.icon} />
                  <h3 className="[font-family:'BDO_Grotesk-Medium',Helvetica] font-medium text-[#222222] text-[20px] tracking-[0] leading-[28px]">
                    {card.title}
                  </h3>
                  <p className="[font-family:'BDO_Grotesk-Regular',Helvetica] font-normal text-[#7b7b7b] text-base tracking-[0] leading-[22px]">
                    {card.description}
                  </p>
                  {card.title === "Good to Know" && (
                    <a
                      href="#"
                      className="hidden md:block [font-family:'BDO_Grotesk-Medium',Helvetica] font-medium text-[#2222227d] text-lg tracking-[0] leading-[27px] underline"
                    >
                      Learn more
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 md:px-8 py-16">
          <div className="bg-[#222222] rounded-[40px] py-12 md:py-20 px-6 md:px-16 text-center max-w-[1200px] mx-auto">
            <p className="[font-family:'BDO_Grotesk-Regular',Helvetica] font-normal text-2xl md:text-[32px] text-center tracking-[-0.80px] leading-tight md:leading-[64px] mb-12 max-w-4xl mx-auto">
              <span className="text-[#dbdbdb4c] tracking-[-0.60px]">
                Reserve this experience for yourself with{" "}
              </span>
              <span className="text-[#ffffffd1] tracking-[-0.60px]">
                not giving a single penny on reservation
              </span>
            </p>
            <Button 
              onClick={() => setShowBookingForm(true)}
              className="bg-transparent border-2 border-white text-white rounded-[40px] px-8 md:px-12 py-4 md:py-2 h-auto [font-family:'Inter_Variable-Bold',Helvetica] font-bold text-xl md:text-[22px] tracking-[-0.80px] leading-[40px] hover:bg-white/10 transition-colors">
              Reserve For Free
            </Button>
          </div>
        </section>

        {/* Footer */}
      
      </div>
      
      {showBookingForm && (
        <BookingForm 
          onClose={() => setShowBookingForm(false)}
          tripTitle={data.title}
          price={data.price || "Contact for pricing"}
        />
      )}
      <img src={image} alt="" />
    </div>
    </>
  );
};
