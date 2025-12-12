import { Link } from 'react-router-dom';
import { Navbartwo } from '../ui/Navbar';

export const NotFound = () => {
  return (
    <>
      <Navbartwo />
      <div className="min-h-screen flex items-center justify-center bg-[#f6f3f0]">
        <div className="text-center">
          <h1 className="text-6xl md:text-[120px] font-bold text-black">404</h1>
          <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
          <Link to="/" className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800">
            Go Home
          </Link>
        </div>
      </div>
    </>
  );
};
