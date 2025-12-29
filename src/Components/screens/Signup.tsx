import  { useState } from 'react'
import { useGoogleLogin } from '@react-oauth/google'
import { Navbar } from '../ui/Navbar';
import { useNavigate } from 'react-router-dom';
import image from '../../assets/WhatsApp.jpg'
import Logo from '../../assets/EXPERIENCES.png' 

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
   
    <br /><br /><br /><br /><br />
    
    
      
      <div className="w-[100%] h-[120vh] md:min-h-screen flex flex-row justify-center gap-8 md:gap-20 items-center mb-20 md:px-4">
      
        <div className="text-left ">
          <img className=' ml-2 w-20' src={Logo} alt="" />
          <p className='ml-2 text-[grey]'>WE ARE UNRAVEL</p>

          <h1 className="hidden md:block ml-2 text-2xl md:text-[28px] font-semibold leading-tight">Travel</h1>
          <h1 className="block md:hidden ml-2 text-2xl md:text-[28px] font-semibold leading-tight">Not just an <br />atelier, we are <br />Effortless.</h1>
          
          <p className="hidden md:block ml-2 text-xl md:text-[26px] -mt-1">better</p>
          <p className="block md:hidden ml-2 text-xs md:text-[13px] text-gray-600 mt-2 max-w-[264px] mb-35 leading-tight  md:mb-0">
            Get first access to Unravel One and the kind of perks most people don’t know exist.
          </p>


          <img
            src={image}
            className="w-[100%] h-100 md:max-w-[430px] md:blur-none blur-xs md:h-[260px]  md:rounded-xl object-cover mt-6"
          />
        </div>

        {/* SIGN UP CARD */}

    <div className="absolute md:static top-[50%] w-[80%] mt-15 max-w-[470px] bg-white shadow-lg border border-gray-100 rounded-xl p-8">
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

            <label className="text-[13px] mb-1">Username</label>
            <input
              type="text"
              name="username"
              placeholder="johndoe"
              value={formData.username}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm mb-4"
              required
            />

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
