
import { Button } from "../ui/buttons";
import { Card, CardContent } from "../ui/card";
import { Separator } from "../ui/Separator";
import { Navbartwo } from "../ui/Navbar";
import React from "react";
import { Link } from "react-router-dom";


const whatWeDontDoItems = [
  "We don't do group tours/ fixed departures.",
  "We don't do rigid schedules.",
  'We don\'t do "must-see" lists that feel like homework.',
  "We don't do cookie-cutter packages.",
];

export const About = () => {
  return (
     <>
     <div className="h-40"><Navbartwo/>
     </div>

    <div
      className="relative w-full bg-white overflow-hidden"
      data-model-id="80:2061"
    >
     

      {/* Hero Section */}
      <section className=" w-full min-h-[400px] md:h-[870px] px-4 py-8 md:py-0">
      <p className="block md:hidden float-right [font-family:'Roboto_Mono',Helvetica] font-bold text-black text-xs pr-5"> 52°30'59"N / 13°22'34"E</p>
        <div className="w-full flex  flex-col lg:flex-row gap-4 lg:gap-20 lg:justify-center items-center">

          <h1 className="mr-[50%] lg:mr-0  [font-family:'BDO_Grotesk-Bold',Helvetica] font-bold text-black text-3xl md:text-[92px] tracking-[-1.92px] leading-tight md:leading-[91.2px]">
            We are
          </h1>
          <div>
  <div className="w-full flex justify-center py-4 md:py-8 [font-family:'Inter-Bold',Helvetica] font-bold text-black text-xs md:text-base">
          <img
            className=" w-4 h-3 md:w-7 md:h-6"
            alt="Svg"
            src="https://c.animaapp.com/miuhpmp5biS0W2/img/svg.svg"
          /> Bangalore based
        </div>
          <img className=" w-[200px] h-[240px] md:w-[404px] md:h-[485px] rounded-2xl bg-cover bg-center" src="https://c.animaapp.com/miuhpmp5biS0W2/img/a-cardboard-box-with-stickers-on-it-flying-through-the-air-.png" alt="" />
         </div>
          <h1 className="ml-[60%] lg:ml-0  [font-family:'BDO_Grotesk-Bold',Helvetica]  font-bold text-black text-3xl md:text-[93px] tracking-[-1.92px] leading-tight md:leading-[91.2px]">
            Unravel
          </h1>
        </div>
        <div className="  w-full md:flex  gap-2  justify-around items-center py-6 md:py-10 [font-family:'Roboto_Mono',Helvetica] font-bold text-black text-xs md:text-sm tracking-[0.70px]">
          <p className="hidden md:block"> 52°30'59"N / 13°22'34"E</p>
          <p className=" pr-5 [font-family:'Roboto_Mono',Helvetica] font-bold text-black  text-xs md:text-sm">
            EST. YR25
          </p>
          <p className=" float-right pl-5 [font-family:'Roboto_Mono',Helvetica] font-bold text-black text-xs md:text-sm">
            SYSTEM: UNRAVEL.
          </p>
        </div>
      </section>

      {/* Why We Exist Section */}
      <section className="relative w-full bg-gradient-to-b from-white to-[#f4f4f4]">
        <div className="max-w-[1708px] mx-auto px-4 md:px-12">
          <h2 className="text-center [font-family:'BDO_Grotesk-Bold',Helvetica] font-bold text-black text-3xl md:text-5xl tracking-[-0.32px] leading-tight md:leading-[17px] mb-4">
            Why We Exist
          </h2>

          <p className="text-center [font-family:'Inter-Bold',Helvetica] font-bold text-[#00000080] text-sm md:text-base tracking-[-0.32px] leading-[16.8px] mb-12">
            Travel shouldn't feel like work
          </p>

          <p className="text-center [font-family:'BDO_Grotesk-Medium',Helvetica] font-medium text-black text-lg md:text-[22px] tracking-[-0.32px] leading-[29px] max-w-[739px] mx-auto mb-16">
            We started Unravel because planning a trip had become exhausting. Too many tabs open. Too many reviews to read. Too many decisions that all felt important but none felt inspiring.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
            <div className="md:col-span-2">
            <Card className="bg-white rounded-[10px] border border-[#00000026] shadow-[0px_4px_29px_#0000001a] p-6 md:p-8 mb-4">
              <CardContent className="p-0">
                <p className="[font-family:'BDO_Grotesk-Regular',Helvetica] font-normal text-black text-base md:text-lg text-center tracking-[1.00px] leading-6">
                  most travel companies were selling the same thing. Generic packages. Tourist traps dressed up as experiences. The same five stops everyone else hits, packaged slightly differently.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white rounded-[10px] border border-[#00000026] shadow-[0px_4px_29px_#0000001a] p-6 md:p-8">
              <CardContent className="p-0">
                <p className="[font-family:'BDO_Grotesk-Regular',Helvetica] font-normal text-black text-base md:text-lg text-center tracking-[1.00px] leading-6">
                  We thought: what if someone actually designed trips that felt personal? What if travel could be truly experiential built around moments that matter, not just landmarks to check off? And what if the entire process was seamless? Where technology handled the tedious parts so you never had to think about confirmations, transfers, or whether you booked the right thing.
                </p>
              </CardContent>
            </Card>
</div>
            <div className="relative md:col-span-1">
              <img
                className="w-full h-[400px] md:h-[641px] rounded-[30px_30px_0px_0px] md:rounded-[50px_50px_0px_0px] object-cover"
                alt="Rectangle"
                src="https://c.animaapp.com/miuhpmp5biS0W2/img/rectangle-261.png"
              />
            </div>

             <p className="text-center [font-family:'BDO_Grotesk-Black',Helvetica] font-black text-[#2e2e2e] text-2xl md:text-[34px] max-w-[554px] mx-auto md:col-span-3">
            So we built Unravel. For people who want to go places, not just research them all day.
          </p>
          </div>

         
        </div>
      </section>

      {/* How We Think About Travel */}
      <section className="relative w-full py-20">
        <div className="max-w-[1708px] mx-auto px-4 md:px-12">
          <h2 className="text-center [font-family:'BDO_Grotesk-Bold',Helvetica] font-bold text-[#2b2b2b] text-3xl md:text-[91.5px] tracking-[-1.92px] leading-tight md:leading-[91.2px] mb-12 md:mb-16">
            How We Think About Travel
          </h2>

          <h3 className="[font-family:'BDO_Grotesk-Bold',Helvetica] font-bold text-black text-lg md:text-[28px] tracking-[-0.32px] leading-normal md:leading-[91.2px] mb-4">
            It's not about ticking boxes.
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-8 md:mb-12">
            <div>
              <p className="[font-family:'BDO_Grotesk-Medium',Helvetica] font-medium text-black text-base md:text-[34px] tracking-[-0.32px] leading-normal md:leading-[45px] mb-6 md:mb-8">
                Good travel isn't about seeing the most. It's about feeling the most. The difference between visiting a city and actually being somewhere.
              </p>

              <p className="[font-family:'BDO_Grotesk-Medium',Helvetica] font-medium text-black text-base md:text-[34px] tracking-[-0.32px] leading-normal md:leading-[45px] mb-6 md:mb-8">
                We design trips around how you want to feel not just where you want to go. Because the best memories aren't made from itineraries. They're made from the moment you stop checking your phone and realize exactly where you are.
              </p>

              <p className="[font-family:'BDO_Grotesk-Bold',Helvetica] font-bold text-black text-base md:text-[34px] tracking-[-0.32px] leading-normal md:leading-[45px]">
                We believe in slow mornings, long dinners, and leaving room for the things you didn't plan.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-2 md:gap-4">
              <img
                className="w-full md:w-[237px] h-[300px] md:h-[737px] rounded-[30px_0px_0px_30px] md:rounded-[50px_0px_0px_50px] object-cover"
                alt="Rectangle"
                src="https://c.animaapp.com/miuhpmp5biS0W2/img/rectangle-133.png"
              />
              <img
                className="w-full md:w-[237px] h-[300px] md:h-[737px] object-cover"
                alt="Rectangle"
                src="https://c.animaapp.com/miuhpmp5biS0W2/img/rectangle-152.png"
              />
              <img
                className="w-full md:w-[237px] h-[300px] md:h-[737px] rounded-[0px_30px_30px_0px] md:rounded-[0px_50px_50px_0px] object-cover"
                alt="Rectangle"
                src="https://c.animaapp.com/miuhpmp5biS0W2/img/rectangle-135.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="relative w-full py-20 bg-[#f6f3f0]">
        <div className="max-w-[1708px] mx-auto px-4 md:px-12">
          <h2 className="text-center [font-family:'BDO_Grotesk-Bold',Helvetica] font-bold text-black text-3xl md:text-6xl tracking-[-0.32px] leading-[34px] mb-16">
            What Makes Us Different
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <Card className="bg-white rounded-[29px] border border-[#00000026] shadow-[0px_4px_29px_#0000001a] p-12">
              <CardContent className="p-0 flex flex-col items-center text-center">
             
                <h1 className="text-[100px]/[80px]  text-[transparent] bg-contain [font-family:'BDO_Grotesk-Bold',Helvetica] font-bold bg-center bg-clip-text  bg-[url(https://c.animaapp.com/miuhpmp5biS0W2/img/we-re-curators.png)]">
                We're Curators</h1>
<br />
                <p className="[font-family:'BDO_Grotesk-Medium',Helvetica] font-medium text-[#393636] text-2xl tracking-[-0.32px] leading-[34px] mb-16">
                  Every experience we create is hand-built. No templates. No copy-paste itineraries. Just thoughtful design based on who you are and what you're chasing.
                </p>

                <p className="[font-family:'BDO_Grotesk-Bold',Helvetica] font-bold text-black text-xl tracking-[-0.32px] leading-[34px]">
                  We don't maximize your time. We make sure it's worth it.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white rounded-[29px] border border-[#00000026] shadow-[0px_4px_29px_#0000001a] p-12">
              <CardContent className="p-0 flex flex-col items-center text-center">

  <h1 className="text-[100px]/[80px]  text-[transparent] bg-contain [font-family:'BDO_Grotesk-Bold',Helvetica] font-bold bg-center bg-clip-text  bg-[url(https://c.animaapp.com/miuhpmp5biS0W2/img/not-sellers.png)]">
                Not <br /> Sellers</h1>
              
              <br />

                <p className="[font-family:'BDO_Grotesk-Medium',Helvetica] font-medium text-[#3a3636] text-2xl tracking-[-0.32px] leading-[34px] mb-9">
                  And when you travel with us, everything is handled. Flights. Stays. Experiences. Transfers. Visas. Travel protection. The invisible work that makes a trip feel seamless instead of stressful.
                </p>

                <p className="[font-family:'BDO_Grotesk-Bold',Helvetica] font-bold text-black text-xl tracking-[-0.32px] leading-[34px]">
                  You just show up. We've thought through the rest.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Don't Do */}
      <section className="relative w-full py-20">
        <div className="max-w-[1708px] mx-auto px-4 md:px-12">
          <h2 className="text-center [font-family:'BDO_Grotesk-Bold',Helvetica] font-bold text-[#222222] text-4xl md:text-6xl tracking-[-0.32px] leading-[45px] mb-4">
            What We Don't Do
          </h2>

          <p className="text-center [font-family:'BDO_Grotesk-Medium',Helvetica] font-medium text-black text-lg md:text-xl tracking-[-0.32px] leading-[45px] mb-8 md:mb-12">
            things we intentionally avoid
          </p>

          <Card className="bg-white rounded-[13px] shadow-[0px_4px_20px_#00000026] max-w-[776px] mx-auto mb-6 md:mb-8">
            <CardContent className="p-0">
              {whatWeDontDoItems.map((item, index) => (
                <React.Fragment key={index}>
                  <p className="[font-family:'BDO_Grotesk-DemiBold',Helvetica] font-bold text-[#222222] text-lg md:text-[25px] tracking-[-0.32px] leading-[34px] py-[24px] md:py-[32px] px-6 md:px-10">
                    {item}
                  </p>
                  <hr className="w-[90%] m-auto" />
                  {index < whatWeDontDoItems.length - 1 && (
                  <Separator className="w-full md:w-[650px] mx-auto" />
                  )}
                </React.Fragment>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-white rounded-[13px] shadow-[0px_4px_20px_#00000026] max-w-[776px] mx-auto p-8 md:p-12">
            <CardContent className="p-0 flex flex-col items-center justify-center gap-4 md:gap-6">
              <p className="[font-family:'BDO_Grotesk-Medium',Helvetica] font-medium text-[#222222] text-lg md:text-[25px] text-center tracking-[-0.32px] leading-[34px]">
                We don't believe in squeezing 12 things into one day just because you're there. We don't design trips for people who want to brag about how many countries they've been to.
              </p>

              <p className="[font-family:'BDO_Grotesk-ExtraBold',Helvetica] font-extrabold text-[#222222] text-lg md:text-[25px] text-center tracking-[-0.32px] leading-[34px]">
                And we definitely don't make you figure out the boring parts on your own.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How We Choose Experiences */}
      <section className=" w-full py-20 bg-[#f6f3f0]">
        <div className=" flex flex-col md:flex-row justify-around items-center max-w-[1708px] mx-auto px-4 md:px-12 gap-8">
         <div className="w-full md:w-[45%]">
          <h2 className="[font-family:'BDO_Grotesk-Bold',Helvetica] font-bold text-black text-3xl md:text-5xl tracking-[-0.32px] sm:leading-[7px] mb-6 md:mb-8">
            How We Choose Experiences
          </h2>

          <h3 className="[font-family:'BDO_Grotesk-Bold',Helvetica] font-bold text-black text-xl md:text-2xl tracking-[-0.32px] leading-[80px] mb-4">
            Not every destination makes the cut.
          </h3>


            <div>
              <p className="[font-family:'BDO_Grotesk-Regular',Helvetica] font-normal text-black text-lg md:text-3xl tracking-[-0.32px] leading-[49px] mb-6 md:mb-8">
                We only curate places we'd actually send our friends to. Places that have something to say. Where the culture, the food, the rhythm of daily life feels intentional. We look for experiences that balance discovery with ease. The kind of trip where you feel like a traveler, not a tourist. Every itinerary we design gets tested, refined, and rebuilt until it feels right. Until it feels like something worth remembering.
              </p>

              <p className="[font-family:'BDO_Grotesk-ExtraBold',Helvetica] font-extrabold text-black text-lg md:text-2xl tracking-[-0.32px] leading-[91.2px]">
                If it doesn't pass that test, it doesn't go live.
              </p>
            </div>
 </div>
            <div className="w-full md:w-[45%] flex flex-col gap-2 md:gap-3">
              <img
                className="w-full h-[80px] md:h-[104px] object-cover"
                alt="Rectangle"
                src="https://c.animaapp.com/miuhpmp5biS0W2/img/rectangle-261.png"
              />
              <img
                className="w-full h-[80px] md:h-[104px] object-cover"
                alt="Rectangle"
                src="https://c.animaapp.com/miuhpmp5biS0W2/img/rectangle-148.png"
              />
              <img
                className="w-full h-[160px] md:h-[212px] object-cover"
                alt="Rectangle"
                src="https://c.animaapp.com/miuhpmp5biS0W2/img/rectangle-149.png"
              />
              <img
                className="w-full h-[80px] md:h-[104px] object-cover"
                alt="Rectangle"
                src="https://c.animaapp.com/miuhpmp5biS0W2/img/rectangle-151.png"
              />
              <img
                className="w-full h-[80px] md:h-[104px] object-cover"
                alt="Rectangle"
                src="https://c.animaapp.com/miuhpmp5biS0W2/img/rectangle-152.png"
              />
            </div>
         
        </div>
      </section>

      {/* Founder Note */}
      <section className="relative w-full py-20">
        <div className="max-w-[1708px] mx-auto px-4 md:px-12">
          <h2 className="text-center [font-family:'BDO_Grotesk-Bold',Helvetica] font-bold text-[#303030] text-4xl md:text-6xl tracking-[-0.64px] leading-[36.8px] mb-8 md:mb-12">
            A Note from Our Founder
          </h2>

          <div className="py-12 md:py-20 bg-[url(https://c.animaapp.com/miuhpmp5biS0W2/img/rectangle-268.png)]">

          <p className="text-center [font-family:'Bell_MT-Bold',Helvetica] font-bold text-[#0000008f] text-3xl md:text-5xl tracking-[-0.32px] leading-[52px] max-w-[934px] mx-auto mb-6 md:mb-8">
            Travel is personal. And we treat it that way.
          </p>

          <p className="text-center [font-family:'Bell_MT-Regular',Helvetica] font-normal text-[#0000008f] text-3xl md:text-5xl tracking-[-0.32px] leading-[52px] max-w-[934px] mx-auto mb-8 md:mb-12">
            If you've read this far and something resonates we'd love to help you plan your next trip. Whether it's something from our collection or something we build just for you.
          </p>

          <p className="text-center rotate-[-4.34deg] opacity-[0.79] [font-family:'Beth_Ellen',Helvetica] font-normal text-[#0101018f] text-3xl md:text-5xl tracking-[-0.32px] leading-[52px] underline">
            Karthik.S
          </p>
     </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full h-[660px] bg-[#f6f3f0] rounded-t-[24px] overflow-hidden">
        <div className="absolute w-full h-full top-0 left-0 bg-[url(https://c.animaapp.com/miuhpmp5biS0W2/img/68efa27b498bb47f7156194a-2f68f48664df65e4092af3fe2c-cta-20video-.png)] bg-cover bg-center" />

        <div className="absolute w-full h-[48.48%] top-[51.52%] left-0 bg-gradient-to-t from-black to-transparent" />

        <img
          className="absolute w-full h-full top-0 left-0"
          alt="Overlay"
          src="https://c.animaapp.com/miuhpmp5biS0W2/img/overlay.svg"
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-8 z-10">
          <div className="flex flex-col items-center gap-5">
            <h2 className="[font-family:'BDO_Grotesk-Regular',Helvetica] font-normal text-[#f6f3f0] text-[46.3px] text-center tracking-[-2.00px] leading-[48px]">
              Unravel Experiences<br />Less work. More intention.
            </h2>

            <p className="[font-family:'BDO_Grotesk-Regular',Helvetica] font-normal text-white text-[15.4px] text-center tracking-[0] leading-6">
              Don't miss the next one
            </p>
          </div>

          <div className="flex gap-4">
           <Link to="/signup"> <Button className="bg-[#f6f3f0] rounded-[32px] border border-[#00000014] hover:bg-[#e6e3e0] transition-colors px-8 h-9">
              <span className="[font-family:'BDO_Grotesk-Regular',Helvetica] font-normal text-black text-[13.3px] tracking-[0.25px] leading-5">
                SIGN UP
              </span>
            </Button>
            </Link>

            <Button className="bg-[#f6f2ef0a] rounded-[32px] border border-[#f6f2ef14] backdrop-blur-[5px] hover:bg-[#f6f2ef1a] transition-colors px-8 h-9">
              <span className="[font-family:'BDO_Grotesk-Regular',Helvetica] font-normal text-[#f6f3f0] text-[13.3px] tracking-[0.25px] leading-5">
                EXPLORE UNRAVEL
              </span>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
            <div className="w-[300px] h-[60px] md:w-[613px] md:h-[117px] bg-[url(https://c.animaapp.com/miuhpmp5biS0W2/img/untitled-design-7-removebg-preview-png.png)] bg-contain bg-no-repeat m-4 md:m-12 my-8 md:my-16" />

    </div>
    </>
  );
};
