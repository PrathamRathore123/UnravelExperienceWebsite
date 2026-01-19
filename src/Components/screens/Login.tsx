import { useState } from "react";
import { Navbar } from "../ui/Navbar";
import { useNavigate } from 'react-router-dom';
import images from '../../assets/Loginpage.jpg';
import Logo from '../../assets/EXPERIENCES.png'




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


  return (
    <>
    <Navbar/>
    
    <div className="w-full min-h-screen bg-white flex flex-col items-center justify-start  md:px-14 py-10 font-sans">
      
      <div className="w-full min-h-screen flex flex-col md:flex-row justify-center items-center  gap-8 md:gap-20">
        
        <div className="absolute top-[55%] md:static z-8 w-[80%] max-w-[470px] bg-white shadow-2xl mx-2 rounded-xl p-5 md:p-7 border border-gray-100">
          <h2 className="text-[30px] font-semibold mb-10">Login</h2>
          {error && <div className=" bg-red-100 text-red-700 p-2 rounded mb-4 text-sm">{error}</div>}
          <form className="" onSubmit={handleLogin}>
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

        </div>
        {/* RIGHT SIDE */}
        <div className="flex flex-col mt-20 md:mt-10 md:pl-10 md:items-center md:items-start">
         
          <h1 className="hidden md:block text-2xl md:text-[28px] font-semibold leading-tight ml-2 text-left">
            Welcome Back
          </h1>
          <h1 className="block md:hidden text-center text-4xl md:text-[28px] font-semibold leading-tight ml-2 ">
           Welcome Back
          </h1>
          <p className="hidden md:block text-[11px] text-gray-500 mt-1 text-left">Your unravel perks are ready when you are Log in to start planning</p>
          <p className= "block md:hidden text-[21px]  text-gray-500  mt-1 text-center">Your unravel perks are ready when you are Log in to start planning </p>
          
          <img
            src={images}
            className="w-full mt-50  blur-xs md:blur-none h-[50vh] md:max-w-[430px] md:h-[250px]  md:rounded-xl object-cover md:mt-6"
          />
        </div>
      </div>
    </div>
    <img className="h-30" src={Logo} alt="" />
    </>
  );
}
