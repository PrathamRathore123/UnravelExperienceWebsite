import React, { useState } from 'react'
import { useGoogleLogin } from '@react-oauth/google'
import { Navbartwo } from '../ui/Navbar';

export  function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
     <Navbartwo></Navbartwo>
   
    <br /><br /><br /><br /><br />
    
    
      
      <div className="w-full flex justify-center gap-20 items-center mb-20 ">
      
        <div>
          <img src="" alt="" />
          <h1 className="text-[28px] font-semibold leading-tight">Travel</h1>
          <p className="text-[26px] -mt-1">better</p>
          <p className="text-[13px] text-gray-600 mt-2 w-64 leading-tight">
            Get first access to Unravel One and the kind of perks most people don’t know exist.
          </p>


          <img
            src="/banner.png"
            className="w-[430px] h-[260px] rounded-xl object-cover mt-6"
          />
        </div>

        {/* SIGN UP CARD */}

    <div className="w-[470px] bg-white shadow-lg border border-gray-100 rounded-xl p-8">
          <h2 className="text-[20px] font-semibold mb-6">Sign Up</h2>

          <div className="flex gap-4 mb-4">
            <div className="flex flex-col w-full">
              <label className="text-[13px] mb-1">First Name</label>
              <input
                type="text"
                placeholder="John"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
              />
            </div>

            <div className="flex flex-col w-full">
              <label className="text-[13px] mb-1">Last Name</label>
              <input
                type="text"
                placeholder="Doe"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
              />
            </div>
          </div>

          <label className="text-[13px] mb-1">Email</label>
          <input
            type="email"
            placeholder="johnroe@gmail.com"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm mb-4"
          />

          <label className="text-[13px] mb-1">Phone</label>
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              placeholder="+91"
              className="w-20 border border-gray-300 rounded-md px-3 py-2 text-sm"
            />
            <input
              type="text"
              placeholder="123 456 7890"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
            />
          </div>

          <label className="text-[13px] mb-1">Password</label>
          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="*************"
              className="w-full border border-gray-300 rounded-md px-3 py-2 pr-10 text-sm"
            />
            <img
              src="/eye.svg"
              onClick={() => setShowPassword(!showPassword)}
              className="w-4 absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
              
            />
          </div>

          <label className="text-[13px] mb-1">Confirm Password</label>
          <div className="relative mb-4">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="*************"
              className="w-full border border-gray-300 rounded-md px-3 py-2 pr-10 text-sm"
            />
            <img
              src="/eye.svg"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="w-4 absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
              
            />
          </div>

          <button className="w-full bg-black text-white py-2 rounded-md text-sm mt-2">
            Create Account
          </button>

          <button 
            onClick={() => googleLogin()}
            className="w-40 border border-gray-300 mt-5 rounded-md py-2 text-sm flex items-center justify-center gap-2"
          >
            <img src="/google.png" className="w-4" /> Login With Google
          </button>
        </div>
        </div>

        </>
  )
}
