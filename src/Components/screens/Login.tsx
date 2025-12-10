import { useState } from "react";
import { useGoogleLogin } from '@react-oauth/google';
import { Navbartwo } from "../ui/Navbar";

export  const Login=()=> {
  const [showPassword, setShowPassword] = useState(false);

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log('Google Login Success:', tokenResponse);
      const userInfo = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
      }).then(res => res.json());
      console.log('User Info:', userInfo);
      // TODO: Send userInfo to your backend
    },
    onError: (error) => console.error('Login Failed:', error)
  });
  return (
    <>
    <Navbartwo/>
    <div className="w-full min-h-screen bg-white flex flex-col items-center justify-start px-14 py-10 font-sans">
      {/* LOGIN SECTION EXACT CLONE */}
      <div className="w-full h-screen flex justify-center items-center gap-20">
        {/* LEFT LOGIN CARD */}
        <div className="w-[470px] h-120 bg-white shadow-2xl rounded-xl p-7 border border-gray-100">
          <h2 className="text-[30px] font-semibold mb-10">Login</h2>

          <div className="flex flex-col mb-6">
            <label className="text-[13px] mb-1">Username</label>
            <input
              type="text"
              placeholder="john@unravel"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none"
            />
          </div>

          <div className="flex flex-col mb-2">
            <label className="text-[13px] mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="*************"
                className="w-full border border-gray-300 rounded-md px-3 py-2 pr-10 text-sm focus:outline-none"
              />
              <img
                src="/eye.svg"
                onClick={() => setShowPassword(!showPassword)}
                className="w-4 absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                
              />
            </div>
          </div>

          <button className="w-full bg-black text-white py-2 rounded-md text-sm mt-4 mb-2">
            LOGIN
          </button>

          <p className="text-[11px] text-right text-gray-500 cursor-pointer">Forgot Your Password</p>

          <button 
            onClick={() => googleLogin()}
            className="w-40 mt-5 border border-gray-300 rounded-md py-2 text-sm flex items-center justify-center gap-2"
          >
            <img src="/google.png" className="w-4" /> Login With Google
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col pl-10">
          <img className="h-[30px] w-[130px] mb-4" src="https://c.animaapp.com/miww62p4QlXFLl/img/untitled-design-7-removebg-preview-png-1.png" alt="" />
           
 
          <h1 className="text-[28px] font-semibold leading-tight">
            Good to see <br /> you
          </h1>
          <p className="text-[11px] text-gray-500 mt-1">Your next trip is waiting</p>

          

          <img
            src="/banner.png"
            className="w-[430px] h-[250px] rounded-xl object-cover mt-6"
          />
        </div>
      </div>

   
    </div>
    </>
  );
}
