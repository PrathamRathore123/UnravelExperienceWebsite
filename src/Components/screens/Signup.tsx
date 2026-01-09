import  { useState } from 'react'
import { useGoogleLogin } from '@react-oauth/google'
import { Navbar } from '../ui/Navbar';
import { useNavigate } from 'react-router-dom';
import { Star } from 'lucide-react';
import image from '../../assets/Signuppage.jpg';
export  function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    username: '',
    password: '',
    confirm_password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      const response = await fetch('http://localhost:8000/api/auth/register/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        alert('Sign up successful!');
        navigate('/');
      } else {
        setError(Object.values(data).flat().join(', '));
      }
    } catch (err) {
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
    },
    onError: (error) => console.error('Login Failed:', error)
  });
  return (
    <>
     <Navbar></Navbar>
   
    <br className='hidden md:block'  /> 
 <br className='hidden md:block'  />
     <br />
   
      
      <div className="w-[100%] sm:h-[100vh] md:h-[90vh] flex flex-row justify-center gap-8 md:gap-20 md:items-center mb-40 md:px-4">
    
      
        {/* LEFT SECTION */}
        <div className=" p-5 md:w-[50%]">
          <img
            src={image}
            alt="Travel"
            className="rounded-xl mb-6 hidden md:block h-40 w-full object-cover"
          />

          <h2 className="text-2xl font-serif font-semibold mb-4">
            Welcome to Unravel Access
          </h2>

          <p className="text-gray-600 mb-6">
            Travel should feel effortless, personal, and rewarding. Unravel Access
            elevates every journey with premium services and seamless experiences.
          </p>

          <ul className="space-y-4 hidden sm:block text-gray-700">
            <li className="flex gap-3">
              <span className='text-white bg-black flex justify-center items-center w-7 h-7  rounded-full'> <Star /></span>
              <span>
                <strong>Complimentary upgrades</strong><br />
                Surprise room and car upgrades whenever available.
              </span>
            </li>
            <li className="flex gap-3">
              <span className='text-white bg-black flex justify-center items-center w-7 h-7  rounded-full'><Star /></span>
              <span>
                <strong>Hometown to airport, on us</strong><br />
                One-way private transfers from your home to the airport.
              </span>
            </li>
            <li className="flex gap-3">
               <span className='text-white bg-black flex justify-center items-center w-7 h-7  rounded-full'><Star /></span>
              <span>
                <strong>Airport fit check</strong><br />
                Partner brands ensure you look sharp before boarding.
              </span>
            </li>
            <li className="flex gap-3">
               <span className='text-white bg-black flex justify-center items-center w-7 h-7  rounded-full'><Star /></span>
              <span>
                <strong>Green impact in your name</strong><br />
                We offset your carbon footprint on every journey.
              </span>
            </li>
          </ul>
          
           <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="Travel"
            className="rounded-xl mt-26 block md:hidden h-80 blur w-full object-cover"
          />
        </div>


        {/* SIGN UP CARD */}

    <div className="absolute z-[999] md:static top-[250px] sm:top-[55%] md:top-[50%] w-[80%]  max-w-[470px] bg-white shadow-lg border border-gray-100 rounded-xl p-8">
          <h2 className="text-[20px] font-semibold mb-6">Sign Up</h2>

          {error && <div className="bg-red-100 text-red-700 p-2 rounded mb-4 text-sm">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="flex gap-4 mb-4">
              <div className="flex flex-col w-full">
                <label className="text-[13px] mb-1">First Name</label>
                <input
                  type="text"
                  name="first_name"
                  placeholder="John"
                  value={formData.first_name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                  required
                />
              </div>

              <div className="flex flex-col w-full">
                <label className="text-[13px] mb-1">Last Name</label>
                <input
                  type="text"
                  name="last_name"
                  placeholder="Doe"
                  value={formData.last_name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                  required
                />
              </div>
            </div>

          

            <label className="text-[13px] mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="johnroe@gmail.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm mb-4"
              required
            />

            <label className="text-[13px] mb-1">Phone</label>
            <input
              type="text"
              name="phone"
              placeholder="+91 123 456 7890"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm mb-4"
            />

            <label className="text-[13px] mb-1">Password</label>
            <div className="relative mb-4">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="*************"
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 pr-10 text-sm"
                required
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
                name="confirm_password"
                placeholder="*************"
                value={formData.confirm_password}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 pr-10 text-sm"
                required
              />
              <img
                src="/eye.svg"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="w-4 absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                
              />
            </div>

            <button type="submit" className="w-full bg-black text-white py-2 rounded-md text-sm mt-2">
              Create Account
            </button>
          </form>

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
