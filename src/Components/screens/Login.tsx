import { useState } from "react";
import { useGoogleLogin } from '@react-oauth/google';
import { Navbartwo } from "../ui/Navbar";
import { useNavigate } from 'react-router-dom';

export  const Login=()=> {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      const response = await fetch('http://localhost:8000/api/auth/login/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      
      const data = await response.json();
      
      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        alert('Login successful!');
        navigate('/');
      } else {
        setError(data.error || 'Login failed');
      }
    } catch {
      setError('Network error. Please try again.');
    }
  };

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
    <div className="w-full min-h-screen bg-white flex flex-col items-center justify-start px-4 md:px-14 py-10 font-sans">
      {/* LOGIN SECTION EXACT CLONE */}
      <div className="w-full min-h-screen flex flex-col md:flex-row justify-center items-center gap-8 md:gap-20">
        {/* LEFT LOGIN CARD */}
        <div className="w-full max-w-[470px] bg-white shadow-2xl rounded-xl p-7 border border-gray-100">
          <h2 className="text-[30px] font-semibold mb-10">Login</h2>

          {error && <div className="bg-red-100 text-red-700 p-2 rounded mb-4 text-sm">{error}</div>}

          <form onSubmit={handleLogin}>
            <div className="flex flex-col mb-6">
              <label className="text-[13px] mb-1">Username</label>
              <input
                type="text"
                placeholder="john@unravel"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none"
                required
              />
            </div>

            <div className="flex flex-col mb-2">
              <label className="text-[13px] mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="*************"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 pr-10 text-sm focus:outline-none"
                  required
                />
                <img
                  src="/eye.svg"
                  onClick={() => setShowPassword(!showPassword)}
                  className="w-4 absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                  
                />
              </div>
            </div>

            <button type="submit" className="w-full bg-black text-white py-2 rounded-md text-sm mt-4 mb-2">
              LOGIN
            </button>
          </form>

          <p className="text-[11px] text-right text-gray-500 cursor-pointer">Forgot Your Password</p>

          <button 
            onClick={() => googleLogin()}
            className="w-40 mt-5 border border-gray-300 rounded-md py-2 text-sm flex items-center justify-center gap-2"
          >
            <img src="/google.png" className="w-4" /> Login With Google
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col md:pl-10 items-center md:items-start">
          <img className="h-[30px] w-[130px] mb-4" src="https://c.animaapp.com/miww62p4QlXFLl/img/untitled-design-7-removebg-preview-png-1.png" alt="" />
           
 
          <h1 className="text-2xl md:text-[28px] font-semibold leading-tight text-center md:text-left">
            Good to see <br /> you
          </h1>
          <p className="text-[11px] text-gray-500 mt-1 text-center md:text-left">Your next trip is waiting</p>

          

          <img
            src="/banner.png"
            className="w-full max-w-[430px] h-[250px] rounded-xl object-cover mt-6"
          />
        </div>
      </div>

   
    </div>
    </>
  );
}
