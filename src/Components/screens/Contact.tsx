import { Button } from "../ui/buttons";
import { Input } from "../ui/input";
import { Textarea } from "../ui/Textarea";
import { Navbar } from "../ui/Navbar";
import { useState } from "react";



export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    people: '',
    dates: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch('http://localhost:8000/api/contact/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Form submitted successfully!');
        setFormData({ name: '', email: '', phone: '', destination: '', people: '', dates: '', notes: '' });
      } else {
        alert('Failed to submit form');
      }
    } catch (error) {
      alert('Error submitting form');
    }
    setIsSubmitting(false);
  };

  return (
    <>  
    <Navbar/> 
    <div
      className="relative w-full min-h-screen bg-white"
      data-model-id="127:379"
    >

      <section className="relative w-full h-[500px] md:h-[900px] bg-no-repeat bg-cover overflow-hidden " style={{backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8)),url(https://c.animaapp.com/miww62p4QlXFLl/img/rectangle-258.png)"}}>
        <div className="absolute top-[150px] md:top-[436px] left-1/2 -translate-x-1/2 w-full max-w-[1242px] px-4">
          <h1 className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] text-center [font-family:'BDO_Grotesk-Bold',Helvetica] font-bold text-[#f6f6f6] text-3xl md:text-[91.7px] tracking-[-1.92px] leading-tight md:leading-[60.2px]">
            Let&#39;s figure this out together
          </h1>
        </div>

        <p className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] absolute top-[250px] md:top-[567px] left-1/2 -translate-x-1/2 w-full max-w-[850px] px-4 text-center [font-family:'BDO_Grotesk-DemiBold',Helvetica] font-bold text-[#cacaca] text-lg md:text-3xl tracking-[-0.80px] leading-[35px]">
          Whether you know exactly where you&#39;re going or just have a feeling
          you want to chase we&#39;re here.
        </p>

        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms] absolute top-[380px] md:top-[699px] left-1/2 -translate-x-1/2 w-[200px] md:w-[236px] h-[45px] md:h-[51px] bg-[#2929297a] rounded-[75px] backdrop-blur-[3px] flex items-center justify-center">
          <span className="[font-family:'BDO_Grotesk-Medium',Helvetica] font-medium text-white text-sm md:text-[21px] tracking-[-0.32px] leading-[30px]">
            Scroll to connect
          </span>
        </div>
      </section>

      <section className="relative w-full px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] text-center [font-family:'BDO_Grotesk-Bold',Helvetica] font-bold text-black text-2xl md:text-[64px] tracking-[0] leading-tight md:leading-[50.2px] mb-6">
            Custom Experience Form
          </h2>

          <p className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] text-center [font-family:'BDO_Grotesk-Regular',Helvetica] font-normal text-black text-lg md:text-[32px] tracking-[0] leading-normal md:leading-[50.2px] mb-4">
            Design your own journey.
          </p>

          <p className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms] text-center [font-family:'BDO_Grotesk-Regular',Helvetica] font-normal text-black text-base md:text-2xl tracking-[0] leading-[37px] max-w-[634px] mx-auto mb-16">
            Didn&#39;t find what you&#39;re looking for? Tell us what you&#39;re
            imagining, and we&#39;ll build something that fits.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-[686px_1fr] gap-0 max-w-[1566px] mx-auto">
            <aside className="bg-[#ebe9e9] rounded-t-[13px] lg:rounded-l-[13px] lg:rounded-tr-none p-6 lg:p-12 space-y-8 lg:space-y-12">
              <div className="w-[150px] h-[30px] md:w-[212px] md:h-[42px] bg-[url(https://c.animaapp.com/miww62p4QlXFLl/img/untitled-design-7-removebg-preview-png.png)] bg-cover bg-center" />

              <div className="space-y-4 lg:space-y-8">
                <h3 className="[font-family:'BDO_Grotesk-Bold',Helvetica] font-bold text-[#222222] text-xl md:text-2xl lg:text-[40px] tracking-[-0.32px] leading-[19.6px]">
                  Corporate &amp; Partnerships
                </h3>

                <h4 className="[font-family:'BDO_Grotesk-DemiBold',Helvetica] font-bold text-[#2f2f2f] text-base md:text-lg lg:text-2xl tracking-[-0.32px] leading-[19.6px]">
                  Working with teams?
                </h4>

                <p className="[font-family:'BDO_Grotesk-Regular',Helvetica] font-normal text-[#323131] text-base lg:text-[21px] tracking-[-0.07px] leading-[30px]">
                  If you&#39;re looking to plan for a group, organize corporate
                  travel, or explore a partnership let&#39;s talk. <br />
                  Drop us a line at{" "}
                  <a
                    href="mailto:Travel@unravelexperiences.com"
                    className="[font-family:'BDO_Grotesk-Bold',Helvetica] font-bold underline"
                  >
                    Travel@unravelexperiences.com
                  </a>
                </p>
              </div>

              <div className="space-y-4 lg:space-y-8">
                <h3 className="[font-family:'BDO_Grotesk-Bold',Helvetica] font-bold text-[#222222] text-2xl lg:text-[40px] tracking-[-0.32px] leading-[19.6px]">
                  Talk to Unravel One
                </h3>

                <h4 className="[font-family:'BDO_Grotesk-DemiBold',Helvetica] font-bold text-[#2f2f2f] text-base md:text-lg lg:text-2xl tracking-[-0.32px] leading-[19.6px]">
                  Need help right now?
                </h4>

                <p className="[font-family:'BDO_Grotesk-Regular',Helvetica] font-normal text-base lg:text-[21px] tracking-[-0.07px] leading-[30px]">
                  <span className="text-[#323131]">
                    Chat with Unravel One on WhatsApp. Ask questions, explore
                    curated itineraries, or just see what&#39;s possible.
                    <br />
                    Think of it as{" "}
                  </span>
                  <span className="[font-family:'BDO_Grotesk-Bold',Helvetica] font-bold text-[#323131]">
                    texting a friend
                  </span>
                  <span className="text-[#323131]">
                    {" "}
                    who&#39;s really good at this.
                  </span>
                </p>

                <div className="flex items-center gap-2">
                  <span className="[font-family:'BDO_Grotesk-Bold',Helvetica] font-bold text-[#0f0f0f] text-2xl tracking-[-0.32px] leading-[30px] underline">
                    Take me to the one
                  </span>
                  <img
                    className="w-[22px] h-[15px]"
                    alt="Arrow"
                    src="https://c.animaapp.com/miww62p4QlXFLl/img/arrow-5.svg"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="[font-family:'BDO_Grotesk-Bold',Helvetica] font-bold text-[#222222] text-xl md:text-2xl lg:text-[40px] tracking-[-0.32px] leading-[19.6px]">
                  Need only the essentials?
                </h3>

                <h4 className="[font-family:'BDO_Grotesk-DemiBold',Helvetica] font-bold text-[#2f2f2f] text-2xl tracking-[-0.32px] leading-[19.6px]">
                  Just looking for a particular thing?
                </h4>

                <p className="[font-family:'BDO_Grotesk-Regular',Helvetica] font-normal text-[#323131] text-[21px] tracking-[-0.07px] leading-[30px]">
                  Just need flights, hotels or transfers? The essentials,
                  sorted. Tell us what you&apos;re looking for, and we&apos;ll
                  handle it from start to finish. Reach out at{" "}
                  <span className="[font-family:'BDO_Grotesk-Bold',Helvetica] font-bold underline">
                    +91 9886174621
                  </span>
                </p>
              </div>
            </aside>

            <div className="bg-[#f1f1f1] rounded-b-[13px] lg:rounded-r-[13px] lg:rounded-bl-none p-6 lg:p-12">
              <div className="">
                <label className="[font-family:'BDO_Grotesk-Regular',Helvetica] font-normal text-[#292929] text-lg md:text-xl tracking-[0] leading-[50.2px]">
                  Name
                </label>
                <Input
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="h-[63px] bg-white rounded-xl border border-[#00000080] shadow-[0px_4px_40px_#00000005] [font-family:'BDO_Grotesk-Regular',Helvetica] text-[#10101080] text-lg"
                />
              </div>

              <div className="">
                <label className="[font-family:'BDO_Grotesk-Regular',Helvetica] font-normal text-[#292929] text-lg md:text-xl tracking-[0] leading-[50.2px]">
                  Email
                </label>
                <Input
                  placeholder="johndoe@gmail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="h-[63px] bg-white rounded-xl border border-[#00000080] shadow-[0px_4px_40px_#00000005] [font-family:'BDO_Grotesk-Regular',Helvetica] text-[#10101080] text-lg"
                />
              </div>

              <div className="">
                <label className="[font-family:'BDO_Grotesk-Regular',Helvetica] font-normal text-[#292929] text-lg md:text-xl tracking-[0] leading-[50.2px]">
                  Phone
                </label>
                <Input
                  placeholder="+91 1234567890"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="h-[63px] bg-white rounded-xl border border-[#00000080] shadow-[0px_4px_40px_#00000005] [font-family:'BDO_Grotesk-Regular',Helvetica] text-[#10101080] text-lg"
                />
              </div>

              <div className="space-y-2">
                <label className="[font-family:'BDO_Grotesk-Regular',Helvetica] font-normal text-[#292929] text-xl tracking-[0] leading-[50.2px]">
                  Where do you want to go? (or the vibe you&#39;re chasing)
                </label>
                <Textarea
                  placeholder="Hi, I want you to curate a trip to Italy i would really love if it will be start from Rome"
                  value={formData.destination}
                  onChange={(e) => setFormData({...formData, destination: e.target.value})}
                  className="min-h-[155px] bg-white rounded-xl border border-[#00000080] shadow-[0px_4px_40px_#00000005] [font-family:'BDO_Grotesk-Regular',Helvetica] text-[#10101080] text-lg resize-none"
                />
              </div>

              <div className="space-y-2">
                <label className="[font-family:'BDO_Grotesk-Regular',Helvetica] font-normal text-[#292929] text-lg md:text-xl tracking-[0] leading-[50.2px]">
                  How many people?
                </label>
                <Input
                  placeholder="2, 3, 4 .eg."
                  value={formData.people}
                  onChange={(e) => setFormData({...formData, people: e.target.value})}
                  className="h-[63px] bg-white rounded-xl border border-[#00000080] shadow-[0px_4px_40px_#00000005] [font-family:'BDO_Grotesk-Regular',Helvetica] text-[#10101080] text-lg"
                />
              </div>

              <div className="space-y-2">
                <label className="[font-family:'BDO_Grotesk-Regular',Helvetica] font-normal text-[#292929] text-lg md:text-xl tracking-[0] leading-[50.2px]">
                  When are you thinking? (dates or just a season)
                </label>
                <Input
                  placeholder="I am planning for this christmas holidays"
                  value={formData.dates}
                  onChange={(e) => setFormData({...formData, dates: e.target.value})}
                  className="h-[63px] bg-white rounded-xl border border-[#00000080] shadow-[0px_4px_40px_#00000005] [font-family:'BDO_Grotesk-Regular',Helvetica] text-[#10101080] text-lg"
                />
              </div>

              <div className="space-y-2">
                <label className="[font-family:'BDO_Grotesk-Regular',Helvetica] font-normal text-[#292929] text-lg md:text-xl tracking-[0] leading-[50.2px]">
                  Anything else we should know?
                </label>
                <Textarea
                  placeholder="budget, must-haves, travel style etc"
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  className="min-h-[171px] bg-white rounded-xl border border-[#00000080] shadow-[0px_4px_40px_#00000005] [font-family:'BDO_Grotesk-Regular',Helvetica] text-[#b8b8b8] text-lg resize-none"
                />
              </div>

              <Button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="h-[63px] mt-10 w-full md:w-[219px] bg-[#222222] rounded-xl shadow-[0px_4px_40px_#00000005] [font-family:'BDO_Grotesk-Regular',Helvetica] font-normal text-[#dddddd] text-[22px] tracking-[0] leading-[50.2px] hover:bg-[#333333] disabled:opacity-50">
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full h-[400px] md:h-[535px] overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt="Location background"
          src="https://c.animaapp.com/miww62p4QlXFLl/img/rectangle-83.png"
        />

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
          <p className="[font-family:'Roboto_Mono',Helvetica] font-bold text-white text-base md:text-[25px] tracking-[0.70px] leading-[13.3px] mb-8 md:mb-16">
            WE&apos;RE BASED IN
          </p>

          <h2 className="text-center [font-family:'BDO_Grotesk-Bold',Helvetica] font-bold text-white text-2xl md:text-[64px] tracking-[-0.88px] leading-tight md:leading-[52px] max-w-[1133px]">
            Bangalore, but we work everywhere.
          </h2>
        </div>
      </section>
 <div className="w-[300px] h-[60px] md:w-[613px] md:h-[117px] mt-15  bg-[url(https://c.animaapp.com/miww62p4QlXFLl/img/untitled-design-7-removebg-preview-png-1.png)] bg-cover bg-center mx-auto" />

     
    </div>
    </>

  );
};
